import {
  BaseBox,
  BaseDivider,
  BaseFlexBox,
  BaseFooter,
  BaseHeader,
} from "@/components";
import BaseButton from "@/components/BaseButton";
import { BaseCard } from "@/components/BaseCard";
import BaseContainer from "@/components/BaseContainer";
import BaseDl from "@/components/BaseDl";
import BaseGrid from "@/components/BaseGrid";
import BaseGridItem from "@/components/BaseGridItem";
import BaseHeading from "@/components/BaseHeading";
import BaseImage from "@/components/BaseImage";
import BaseInternalLink from "@/components/BaseInternalLink";
import BaseKeyVisual from "@/components/BaseKeyVisual";
import BaseReadMore from "@/components/BaseReadMore";
import BaseSection from "@/components/BaseSection";
import { BaseTag, BaseTagGroup } from "@/components/BaseTag";
import BaseTypography from "@/components/BaseTypography";

const Signup = () => {
  const onClick = () => {};
  return (
    <>
      <BaseHeader />
      <BaseContainer>
        <BaseSection>
          <BaseBox py="4xl">
            <BaseHeading as="h2" variant="section" description="SIGN UP">
              会員登録
            </BaseHeading>
            <BaseBox py="3xl">
              <BaseDl />
            </BaseBox>
            <BaseButton onClick={onClick}>確認画面へ進む</BaseButton>
          </BaseBox>
        </BaseSection>
      </BaseContainer>

      {/* <BaseBox top="5xl" bottom="0">
        <BaseContainer>
          <BaseDl />
        </BaseContainer>
      </BaseBox> */}
      <BaseFooter />
    </>
  );
};
export default Signup;
