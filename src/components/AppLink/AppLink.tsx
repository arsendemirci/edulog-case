import Link from "next/link";
import { AppLinkProps } from "@/types/props";

export default function AppLink(props: AppLinkProps) {
  return (
    <Link href={props.href}>
      <a onClick={props.onClick}>{props.children}</a>
    </Link>
  );
}
