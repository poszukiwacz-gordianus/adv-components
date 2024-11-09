import { type ComponentPropsWithoutRef } from "react";

// type ButtonProps = {
//   el: "button";
// } & ComponentPropsWithoutRef<"button">;

// type AnchorProps = {
//   el: "anchor";
// } & ComponentPropsWithoutRef<"a">;
type ButtonProps = ComponentPropsWithoutRef<"button"> & { href?: never };
type AnchorProps = ComponentPropsWithoutRef<"a"> & { href?: string };
type Props = ButtonProps | AnchorProps;

const isAnchorProps = (props: Props): props is AnchorProps => "href" in props;

export default function Button(props: Props) {
  //   if (props.el === "anchor") {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
