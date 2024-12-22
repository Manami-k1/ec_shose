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
      <BaseBox py="sm">
        <BaseContainer>
          <BaseFlexBox gap="lg" justifyContent="end">
            <BaseInternalLink
              href="/signup"
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
            <BaseInternalLink href="/" variant="contained">
              <BaseHeading>ECサイト</BaseHeading>
            </BaseInternalLink>
            <BaseBox py="md">
              <BaseFlexBox
                alignItems="center"
                justifyContent="end"
                gap="sm"
                bottom="sm"
              >
                <BaseInternalLink href="/" variant="contained" fontSize="sm">
                  お気に入り
                </BaseInternalLink>
                <BaseInternalLink href="/" variant="contained" fontSize="sm">
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
          <BaseFlexBox justifyContent="center" wrap gapX="4xl" gapY="lg">
            <BaseInternalLink
              href="/"
              fontWeight="bold"
              variant="contained"
              color="white"
              fontSize="lg"
            >
              カテゴリ
            </BaseInternalLink>
            <BaseInternalLink
              href="/"
              fontWeight="bold"
              variant="contained"
              color="white"
              fontSize="lg"
            >
              新規商品
            </BaseInternalLink>
            <BaseInternalLink
              href="/"
              fontWeight="bold"
              variant="contained"
              color="white"
              fontSize="lg"
            >
              SALE商品
            </BaseInternalLink>
            <BaseInternalLink
              href="/"
              fontWeight="bold"
              variant="contained"
              color="white"
              fontSize="lg"
            >
              期間限定商品
            </BaseInternalLink>
            <BaseInternalLink
              href="/"
              fontWeight="bold"
              variant="contained"
              color="white"
              fontSize="lg"
            >
              あなたへのおすすめ
            </BaseInternalLink>
            <BaseInternalLink
              href="/"
              fontWeight="bold"
              variant="contained"
              color="white"
              fontSize="lg"
            >
              店舗情報
            </BaseInternalLink>
            <BaseInternalLink
              href="/"
              fontWeight="bold"
              variant="contained"
              color="white"
              fontSize="lg"
            >
              その他
            </BaseInternalLink>
          </BaseFlexBox>
        </BaseContainer>
      </BaseBox>
    </>
  );
};
export default BaseHeader;
