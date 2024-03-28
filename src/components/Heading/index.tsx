import Information from "./Information";
import LinkContainer from "./Link";

const Heading = () => {
  return (
    <>
      <div className="container">
        <Information
          title="FIG ARTISTIC GYMNASTICS WORLD CUP"
          location="Doha, Qatar"
          period="12/03/2023 - 13/02/2023"
        />
      </div>
      <LinkContainer />
    </>
  );
};

export default Heading;
