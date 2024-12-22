import { FC } from "react";
import { StyledDd, StyledDl, StyledDt } from "./style";
import BaseInput from "../BaseInput";
import BaseFormField from "../BaseFormField";
import BaseInputGroup from "../BaseInputGroup";
import BaseFlexBox from "../BaseFlexBox";

interface DlProps extends React.ComponentPropsWithoutRef<"dl"> {}
const BaseDl: FC<DlProps> = ({ children }) => {
  return (
    <>
      <StyledDl>
        <StyledDt>お名前（漢字）</StyledDt>
        <StyledDd>
          <BaseFlexBox gapX="xl">
            <BaseInputGroup>
              [姓]
              <BaseInput variant="form" />
            </BaseInputGroup>
            <BaseInputGroup>
              [名]
              <BaseInput variant="form" />
            </BaseInputGroup>
          </BaseFlexBox>
        </StyledDd>
      </StyledDl>
      <StyledDl>
        <StyledDt>お名前（フリガナ）</StyledDt>
        <StyledDd>
          <BaseFlexBox gapX="xl">
            <BaseInputGroup>
              [セイ]
              <BaseInput variant="form" />
            </BaseInputGroup>
            <BaseInputGroup>
              [メイ]
              <BaseInput variant="form" />
            </BaseInputGroup>
          </BaseFlexBox>
        </StyledDd>
      </StyledDl>
      <StyledDl>
        <StyledDt>生年月日</StyledDt>
        <StyledDd>
          <BaseFlexBox gapX="xl">
            <BaseInputGroup>
              <BaseInput variant="form" />年
            </BaseInputGroup>
            <BaseInputGroup>
              <BaseInput variant="form" />月
            </BaseInputGroup>
            <BaseInputGroup>
              <BaseInput variant="form" />日
            </BaseInputGroup>
          </BaseFlexBox>
        </StyledDd>
      </StyledDl>
      <StyledDl>
        <StyledDt>住所</StyledDt>
        <StyledDd>
          <BaseFormField>
            <BaseInputGroup>
              郵便番号：
              <BaseInput variant="form" />
            </BaseInputGroup>
            <BaseInputGroup>
              都道府県：
              <BaseInput variant="form" />
            </BaseInputGroup>
            <BaseInputGroup>
              市区町村：
              <BaseInput variant="form" w="lg" />
            </BaseInputGroup>
            <BaseInputGroup>
              それ以降：
              <BaseInput variant="form" w="lg" />
            </BaseInputGroup>
          </BaseFormField>
        </StyledDd>
      </StyledDl>
      <StyledDl>
        <StyledDt>連絡先電話番号</StyledDt>
        <StyledDd>
          <BaseFormField>
            <BaseInputGroup>
              <BaseInput variant="form" w="lg" />
            </BaseInputGroup>
          </BaseFormField>
        </StyledDd>
      </StyledDl>
      <StyledDl>
        <StyledDt>メールアドレス（お客様ID）</StyledDt>
        <StyledDd>
          <BaseFormField>
            <BaseInputGroup>
              <BaseInput variant="form" w="lg" />
            </BaseInputGroup>
            <BaseInputGroup>
              確認用：
              <BaseInput variant="form" w="lg" />
            </BaseInputGroup>
          </BaseFormField>
        </StyledDd>
      </StyledDl>
      <StyledDl>
        <StyledDt>パスワード</StyledDt>
        <StyledDd>
          <BaseFormField>
            <BaseInputGroup>
              <BaseInput variant="form" w="lg" />
            </BaseInputGroup>
          </BaseFormField>
        </StyledDd>
      </StyledDl>
      <StyledDl>
        <StyledDt>パスワード（確認用）</StyledDt>
        <StyledDd>
          <BaseFormField>
            <BaseInputGroup>
              <BaseInput variant="form" w="lg" />
            </BaseInputGroup>
          </BaseFormField>
        </StyledDd>
      </StyledDl>
    </>
  );
};
export default BaseDl;
