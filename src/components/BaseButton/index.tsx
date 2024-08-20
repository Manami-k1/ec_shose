import { FC } from "react";
import { Button } from "@mui/material";
import { StyledButton } from "./style";
import { ColorsType } from "@/types/theme";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  color: keyof ColorsType;
}

/**
 * 基本的なボタンコンポーネントです。
 *
 * @param props - ボタンのプロパティ。`color` と `children` を含みます。
 * @param props.color - ボタンの色を指定します。任意の文字列が使用可能です。
 * @param props.children - ボタン内に表示されるコンテンツ。通常はテキストやアイコンなど。
 * @param rest - 他の `button` タグに渡す追加のプロパティ。
 *
 * @example
 * ```tsx
 * <BaseButton color="primary">Click me</BaseButton>
 * ```
 */
const BaseButton: FC<ButtonProps> = ({ children, color, ...rest }) => {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
};
export default BaseButton;
