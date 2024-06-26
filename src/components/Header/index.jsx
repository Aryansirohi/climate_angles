import { CloseSVG } from "../../assets/images";
import { Img, Text, Heading, Button, Input } from "./..";
import React from "react";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header
      {...props}
      className={`${props.className} flex items-center p-6 sm:p-5 border-gray-200 border-b border-solid bg-white-a700`}
    >
      <div className="mx-auto flex w-full max-w-[1088px] justify-between gap-5 md:flex-col">
        <Input
          name="Search Input"
          placeholder={`Search by company name...`}
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e.target.value)}
          prefix={<Img src="images/img_rewind.svg" alt="rewind" className="h-[24px] w-[24px] cursor-pointer" />}
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#484644ff" />
            ) : null
          }
          className="flex h-[48px] w-[28%] items-center justify-center gap-2 rounded-lg border border-solid border-gray-400 bg-white-a700 pl-4 pr-[34px] text-base text-gray-500 md:w-full sm:pr-5"
        />
        <div className="flex w-[24%] justify-center gap-4 md:w-full">
          <Button className="flex h-[48px] w-[48px] items-center justify-center rounded-[24px] bg-green-50_7f px-3">
            <Img src="images/img_notifications.svg" />
          </Button>
          <div className="flex flex-1 justify-center gap-2">
            <Img
              src="images/img_frame_159360.png"
              alt="profile image"
              className="h-[48px] w-[48px] rounded-[24px] object-cover"
            />
            <div className="flex flex-1 items-center justify-center gap-2">
              <div className="flex flex-1 flex-col items-start gap-1">
                <Heading size="headings" as="h6">
                  Shailesh Vickram
                </Heading>
                <Text as="p" className="!text-gray-800_01">
                  Investor
                </Text>
              </div>
              <Img src="images/img_arrow_down.svg" alt="dropdown arrow" className="h-[24px] w-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
