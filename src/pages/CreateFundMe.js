import { useStoreState } from "easy-peasy";
import React from "react";
import { GridCol, GridContainer } from "../assets/jss/flexGrid";
import Section from "../assets/jss/section";
import CustomButton from "../components/Button/Button";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import Textarea from "../components/Input/Textarea";
import Text from "../components/Typography/Text";
import Title from "../components/Typography/Title";

//Declare IPFS
const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient({ host: "ipfs.infura.io", port: 5001, protocol: "https" }); // leaving out the arguments will default to these values

export default function CreateFundMe() {
  const { contract, account } = useStoreState((state) => state.connection);
  const [values, setValues] = React.useState({
    imageHash: "",
    name: "",
    title: "",
    description: "",
    amountRequested: "",
  });

  const numRegex = /^\d+(?:\.\d{1,4})?$/;
  const [loading, setLoading] = React.useState(false);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const result = await ipfs.add(values.imageHash);
      const hash = result[0]?.hash;
      await contract.methods
        .uploadPost(hash, values.name, values.title, values.description, window.web3.utils.toWei(values.amountRequested.toString(), "Ether"))
        .send({ from: account });
      setLoading(false);
      setValues({
        imageHash: "",
        name: "",
        title: "",
        description: "",
        amountRequested: "",
      });
      e.target.reset();
      alert("Funding request successful");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Section>
      <GridContainer justify="center">
        <GridCol xs={12} md={10} lg={8} xl={7}>
          <Card>
            <form onSubmit={handleSubmit}>
              <GridContainer>
                <GridCol xs={12}>
                  <Title size={23} align="center" mb="10px" primary>
                    Fund Request Form
                  </Title>
                  <Text mb="50px" color="text">
                    Only one more step to get started, fill the form below!
                  </Text>
                </GridCol>
                <GridCol xs={12}>
                  <Input value={values.name} onChange={handleChange} required name="name" placeholder="Enter your name" />
                </GridCol>
                <GridCol xs={12}>
                  <Input value={values.title} onChange={handleChange} required name="title" placeholder="Enter title of fund request" />
                </GridCol>

                <GridCol xs={12}>
                  <Input
                    onChange={(e) => {
                      const { value, name } = e.target;
                      (numRegex.test(value) || value === "") && setValues((prev) => ({ ...prev, [name]: Number(value) }));
                    }}
                    required
                    name="amountRequested"
                    value={values.amountRequested}
                    placeholder="Enter amount"
                  />
                </GridCol>

                <GridCol xs={12}>
                  <Textarea value={values.description} onChange={handleChange} required name="description" placeholder="Enter description" />
                </GridCol>

                <GridCol xs={12}>
                  <Text ml="10px" mb="5px" size={12}>
                    Uploade fund request image/proof
                  </Text>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files[0] !== undefined) {
                        const reader = new window.FileReader();
                        reader.readAsArrayBuffer(e.target.files[0]);
                        reader.onloadend = () => {
                          const buffer = Buffer(reader.result);
                          setValues((prev) => ({ ...prev, imageHash: buffer }));
                        };
                      }
                    }}
                    required
                    name="imageHash"
                  />
                </GridCol>

                <CustomButton loading={loading} block mt="40px">
                  Submit
                </CustomButton>
              </GridContainer>
            </form>
          </Card>
        </GridCol>
      </GridContainer>
    </Section>
  );
}
