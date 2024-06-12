"use client";
import { NextUIProvider } from "@nextui-org/react";
export default function NextUIProv({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
