import BaseBox from "../BaseBox";
import BaseTypography from "../BaseTypography";

const BaseFooter = () => {
  return (
    <BaseBox bgColor="black" p="lg">
      <BaseTypography color="white" fontSize="md" textAlign="center">
        <small>@ECサイト.com</small>
      </BaseTypography>
    </BaseBox>
  );
};
export default BaseFooter;
