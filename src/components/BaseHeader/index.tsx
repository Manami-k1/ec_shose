import { FC } from "react";
import BaseBox from "../BaseBox";
import BaseContainer from "../BaseContainer";
import BaseFlexBox from "../BaseFlexBox";
import BaseInternalLink from "../BaseInternalLink";
import BaseInput from "../BaseInput";
import BaseHeading from "../BaseHeading";
import BaseDivider from "../BaseDivider";

interface HeaderProps extends React.ComponentPropsWithoutRef<"div"> {}
const BaseHeader: FC<HeaderProps> = () => {
  return (
    <>
      <BaseBox py="lg">
        <BaseContainer>
          <BaseFlexBox gap="lg" justifyContent="end">
            <BaseInternalLink
              href="/"
              variant="contained"
              fontSize="sm"
              fontWeight="bold"
            >
              会員登録
            </BaseInternalLink>
            <BaseInternalLink
              href="/"
              variant="contained"
              fontSize="sm"
              fontWeight="bold"
            >
              ログイン
            </BaseInternalLink>
            <BaseInternalLink variant="contained" fontSize="sm" href="/">
              お問い合わせ
            </BaseInternalLink>
          </BaseFlexBox>
        </BaseContainer>
      </BaseBox>
      <BaseDivider />
      <BaseBox>
        <BaseContainer>
          <BaseFlexBox alignItems="center" justifyContent="between">
            <BaseHeading fontSize="3xl">SAMPLE ECサイト</BaseHeading>
            <BaseBox py="lg">
              <BaseFlexBox
                alignItems="center"
                justifyContent="end"
                gap="sm"
                bottom="md"
              >
                <BaseInternalLink href="/" variant="contained">
                  お気に入り
                </BaseInternalLink>
                <BaseInternalLink href="/" variant="contained">
                  カート
                </BaseInternalLink>
              </BaseFlexBox>
              <BaseInput
                variant="search"
                placeholder="何かお探しですか?"
                width="100%"
              />
            </BaseBox>
          </BaseFlexBox>
        </BaseContainer>
      </BaseBox>
      <BaseBox bgColor="accent" py="xl">
        <BaseContainer>
          <BaseFlexBox justifyContent="center" wrap gap="4xl">
            <BaseInternalLink
              href="/"
              fontWeight="bold"
              variant="contained"
              color="white"
              fontSize="xl"
            >
              カテゴリ
            </BaseInternalLink>
            <BaseInternalLink
              href="/"
              fontWeight="bold"
              variant="contained"
              color="white"
              fontSize="xl"
            >
              新規商品
            </BaseInternalLink>
            <BaseInternalLink
              href="/"
              fontWeight="bold"
              variant="contained"
              color="white"
              fontSize="xl"
            >
              SALE商品
            </BaseInternalLink>
            <BaseInternalLink
              href="/"
              fontWeight="bold"
              variant="contained"
              color="white"
              fontSize="xl"
            >
              期間限定商品
            </BaseInternalLink>
            <BaseInternalLink
              href="/"
              fontWeight="bold"
              variant="contained"
              color="white"
              fontSize="xl"
            >
              あなたへのおすすめ
            </BaseInternalLink>
          </BaseFlexBox>
        </BaseContainer>
      </BaseBox>
    </>
  );
};
export default BaseHeader;
