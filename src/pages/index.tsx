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

const Home = () => {
  const newItems = 20;
  const pickupItems = 5;
  const saleItems = 5;
  return (
    <>
      <BaseHeader />
      <BaseKeyVisual />
      <BaseBox top="5xl" bottom="0">
        <BaseContainer>
          <BaseFlexBox gap="3xl">
            <BaseBox as="aside" w="200px">
              <BaseTypography variant="block">
                カジュアルシューズ
              </BaseTypography>
              <BaseBox py="sm">
                <BaseInternalLink
                  href="/"
                  variant="contained"
                  color="black"
                  m="lg"
                >
                  スニーカー
                </BaseInternalLink>
                <BaseInternalLink
                  href="/"
                  variant="contained"
                  color="black"
                  m="lg"
                >
                  スニーカー
                </BaseInternalLink>
              </BaseBox>
              <BaseTypography variant="block">
                カジュアルシューズ
              </BaseTypography>
              <BaseBox py="sm">
                <BaseInternalLink
                  href="/"
                  variant="contained"
                  color="black"
                  m="lg"
                >
                  スニーカー
                </BaseInternalLink>
                <BaseInternalLink
                  href="/"
                  variant="contained"
                  color="black"
                  m="lg"
                >
                  スニーカー
                </BaseInternalLink>
              </BaseBox>
            </BaseBox>
            <BaseBox as="main" w="calc(100% - 200px)">
              <BaseSection>
                <BaseHeading
                  as="h2"
                  variant="section"
                  description="NEW ARRIVAL"
                >
                  新規商品
                </BaseHeading>
                <BaseBox top="3xl">
                  <BaseGrid tempCol="140px" gapX="xl" gapY="3xl">
                    {Array.from({ length: newItems }).map((_, i) => (
                      <BaseGridItem>
                        <BaseCard>
                          <BaseFlexBox
                            justifyContent="between"
                            direction="column"
                          >
                            <BaseBox>
                              <BaseBox pos="relative">
                                <BaseTagGroup pos="absolute">
                                  <BaseTag bgColor="sky" variant="block">
                                    NEW
                                  </BaseTag>
                                  <BaseTag bgColor="red" variant="block">
                                    SALE
                                  </BaseTag>
                                </BaseTagGroup>
                                <BaseImage src="item1.jpg" alt="item1" />
                              </BaseBox>
                              <BaseTypography
                                fontSize="sm"
                                fontWeight="bold"
                                py="md"
                              >
                                商品名商品名商品名商品名商品名商品名
                              </BaseTypography>
                            </BaseBox>

                            <BaseFlexBox alignItems="end">
                              <BaseTypography
                                fontSize="lg"
                                color="sub"
                                fontWeight="bold"
                              >
                                ¥ 2,682
                              </BaseTypography>
                              <BaseTypography
                                fontSize="sm"
                                as="span"
                                color="sub"
                                fontWeight="bold"
                              >
                                （税込）
                              </BaseTypography>
                            </BaseFlexBox>
                          </BaseFlexBox>
                        </BaseCard>
                      </BaseGridItem>
                    ))}
                  </BaseGrid>
                  <BaseReadMore href="/" />
                </BaseBox>
              </BaseSection>
              <BaseSection>
                <BaseHeading
                  as="h2"
                  variant="section"
                  description="PICKUP ARRIVAL"
                >
                  あなたへのおすすめ
                </BaseHeading>
                <BaseBox top="3xl">
                  <BaseGrid tempCol="140px" gapX="xl" gapY="3xl">
                    {Array.from({ length: pickupItems }).map((_, i) => (
                      <BaseGridItem>
                        <BaseCard>
                          <BaseFlexBox
                            justifyContent="between"
                            direction="column"
                          >
                            <BaseBox>
                              <BaseBox pos="relative">
                                <BaseTagGroup pos="absolute">
                                  <BaseTag bgColor="sky" variant="block">
                                    NEW
                                  </BaseTag>
                                  <BaseTag bgColor="red" variant="block">
                                    SALE
                                  </BaseTag>
                                </BaseTagGroup>
                                <BaseImage src="item1.jpg" alt="item1" />
                              </BaseBox>
                              <BaseTypography
                                fontSize="sm"
                                fontWeight="bold"
                                py="md"
                              >
                                商品名商品名商品名商品名商品名商品名
                              </BaseTypography>
                            </BaseBox>

                            <BaseFlexBox alignItems="end">
                              <BaseTypography
                                fontSize="lg"
                                color="sub"
                                fontWeight="bold"
                              >
                                ¥ 2,682
                              </BaseTypography>
                              <BaseTypography
                                fontSize="sm"
                                as="span"
                                color="sub"
                                fontWeight="bold"
                              >
                                （税込）
                              </BaseTypography>
                            </BaseFlexBox>
                          </BaseFlexBox>
                        </BaseCard>
                      </BaseGridItem>
                    ))}
                  </BaseGrid>
                </BaseBox>
              </BaseSection>
              <BaseSection>
                <BaseHeading
                  as="h2"
                  variant="section"
                  description="SALE ARRIVAL"
                >
                  セールスアイテム
                </BaseHeading>
                <BaseBox top="3xl">
                  <BaseGrid tempCol="140px" gapX="xl" gapY="3xl">
                    {Array.from({ length: saleItems }).map((_, i) => (
                      <BaseGridItem>
                        <BaseCard>
                          <BaseFlexBox
                            justifyContent="between"
                            direction="column"
                          >
                            <BaseBox>
                              <BaseBox pos="relative">
                                <BaseTagGroup pos="absolute">
                                  <BaseTag bgColor="sky" variant="block">
                                    NEW
                                  </BaseTag>
                                  <BaseTag bgColor="red" variant="block">
                                    SALE
                                  </BaseTag>
                                </BaseTagGroup>
                                <BaseImage src="item1.jpg" alt="item1" />
                              </BaseBox>
                              <BaseTypography
                                fontSize="sm"
                                fontWeight="bold"
                                py="md"
                              >
                                商品名商品名商品名商品名商品名商品名
                              </BaseTypography>
                            </BaseBox>

                            <BaseFlexBox alignItems="end">
                              <BaseTypography
                                fontSize="lg"
                                color="sub"
                                fontWeight="bold"
                              >
                                ¥ 2,682
                              </BaseTypography>
                              <BaseTypography
                                fontSize="sm"
                                as="span"
                                color="sub"
                                fontWeight="bold"
                              >
                                （税込）
                              </BaseTypography>
                            </BaseFlexBox>
                          </BaseFlexBox>
                        </BaseCard>
                      </BaseGridItem>
                    ))}
                  </BaseGrid>
                  <BaseReadMore href="/" />
                </BaseBox>
              </BaseSection>
              <BaseSection>
                <BaseBox bgColor="lightGray" px="5xl" py="4xl">
                  <BaseHeading as="h2" variant="section" description="NEWS">
                    新着情報
                  </BaseHeading>
                  <BaseBox top="xl" m="auto" w="fit-content">
                    <BaseInternalLink href="/" m="md">
                      7月26日 イベント情報を更新しました
                    </BaseInternalLink>
                    <BaseInternalLink href="/" m="md">
                      7月26日 イベント情報を更新しました
                    </BaseInternalLink>
                    <BaseInternalLink href="/" m="md">
                      7月26日 イベント情報を更新しました
                    </BaseInternalLink>
                    <BaseInternalLink href="/" m="md">
                      7月26日 イベント情報を更新しました
                    </BaseInternalLink>
                  </BaseBox>
                </BaseBox>
              </BaseSection>
            </BaseBox>
          </BaseFlexBox>
        </BaseContainer>
      </BaseBox>
      <BaseFooter />
    </>
  );
};
export default Home;
