import React from "react";
import styles from "./common-components.module.css";
import { Property } from "csstype";

interface IFlexBoxProps {
  flexDirection: Property.FlexDirection;
  flex: Property.Flex;
  justifyContent: Property.JustifyContent;
  justifyItems: Property.JustifyItems;
  alignItems: Property.AlignItems;
  alignContent: Property.AlignContent;
  alignSelf: Property.AlignSelf;
}

export const FlexBox = (
  props: React.PropsWithChildren<Partial<IFlexBoxProps>>
) => {
  const { children, ...restProps } = props;
  return (
    <div className={styles.flexBox} style={restProps}>
      {children}
    </div>
  );
};
