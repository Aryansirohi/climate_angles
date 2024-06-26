import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Button, Img, Heading, Input } from "../../components";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function Dashboard5Page() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Investor Dashboard - Portfolio & Updates</title>
        <meta
          name="description"
          content="Stay updated with your investment portfolio, syndicates, and the latest in battery recycling and green technology. Access your ledger, messages, and more on the Investor Dashboard."
        />
      </Helmet>

      {/* main dashboard section */}
      <div className="w-full bg-gray-50_01">
        {/* sidebar navigation section */}
        <div className="mb-1 flex items-start">
          {/* sidebar logo section */}
          <Sidebar1 />
          <div className="flex flex-1 flex-col gap-8 self-center">
            {/* header section */}
            <Header />

            {/* content section */}
            <div className="ml-[30px] mr-12 md:mx-0">
              {/* portfolio tabs section */}
              <Tabs
                className="flex flex-col items-start gap-[26px]"
                selectedTabClassName="!text-gray-800 font-semibold"
                selectedTabPanelClassName="relative tab-panel--selected"
              >
                <Heading size="headingxl" as="h1" className="!font-montserrat !text-black-900">
                  My portfolio
                </Heading>
                <TabList className="outline-b-[1] flex flex-wrap items-start gap-10 px-2 py-1 outline outline-gray-400">
                  <Tab className="mb-1.5 text-base font-medium text-gray-800">Dashboard</Tab>
                  <Tab className="text-base font-medium text-gray-800">MIS & Updates</Tab>
                  <Tab className="text-base font-medium text-gray-800">Insights</Tab>
                </TabList>

                {/* activity feed section */}
                <div className="flex items-start gap-6 self-stretch md:flex-col">
                  {[...Array(3)].map((_, index) => (
                    <TabPanel key={`tab-panel${index}`} className="absolute flex-1 self-center md:self-stretch md:p-5">
                      {/* tab content section */}
                      <div className="w-full flex-1 self-center md:self-stretch md:p-5">
                        <div className="flex flex-col items-start">
                          <div className="flex gap-4 self-stretch sm:flex-col">
                            <Input
                              name="Search Field"
                              placeholder={`Search by company name...`}
                              value={searchBarValue1}
                              onChange={(e) => setSearchBarValue1(e.target.value)}
                              prefix={
                                <Img
                                  src="images/img_rewind.svg"
                                  alt="rewind"
                                  className="h-[24px] w-[24px] cursor-pointer"
                                />
                              }
                              suffix={
                                searchBarValue1?.length > 0 ? (
                                  <CloseSVG
                                    onClick={() => setSearchBarValue1("")}
                                    height={24}
                                    width={24}
                                    fillColor="#484644ff"
                                  />
                                ) : null
                              }
                              className="flex h-[48px] w-[44%] items-center justify-center gap-2 rounded-lg border border-solid border-gray-400 bg-white-a700 pl-4 pr-[34px] font-manrope text-base text-gray-500 sm:w-full sm:pr-5"
                            />
                            <Button
                              leftIcon={
                                <Img src="images/img_thumbsup.svg" alt="thumbs_up" className="h-[24px] w-[24px]" />
                              }
                              className="flex h-[48px] min-w-[100px] flex-row items-center justify-center gap-2 rounded-lg border border-solid border-gray-400 bg-white-a700 px-3.5 text-center font-manrope text-base text-gray-900_01"
                            >
                              Filter
                            </Button>
                          </div>
                          <Heading size="headinglg" as="h2" className="mt-[26px] !font-montserrat !text-gray-900">
                            Activity feed
                          </Heading>
                          <div className="mt-3.5 flex flex-col items-center self-stretch rounded-[12px] border border-solid border-gray-400 bg-white-a700 p-[22px] sm:p-5">
                            <div className="flex flex-col gap-4 self-stretch">
                              <div className="flex flex-col gap-4">
                                <div className="flex justify-between gap-5">
                                  <Text
                                    as="p"
                                    className="flex items-center justify-center rounded-[12px] bg-green-50 px-4 py-0.5 !font-medium"
                                  >
                                    Investor update
                                  </Text>
                                  <Img
                                    src="images/img_notification.svg"
                                    alt="notification icon"
                                    className="h-[24px] w-[24px]"
                                  />
                                </div>
                                <div className="flex items-center gap-2.5 md:flex-col">
                                  <div className="w-[8%] rounded-[32px] border border-solid border-gray-200 bg-white-a700 md:w-full">
                                    <Img
                                      src="images/img_image_150.png"
                                      alt="image one"
                                      className="h-[64px] w-full rounded-[32px] object-cover md:h-auto"
                                    />
                                  </div>
                                  <div className="flex flex-1 flex-col items-start justify-center gap-1 md:self-stretch">
                                    <Heading size="headingmd" as="h3" className="!font-montserrat !text-gray-900">
                                      Ace Green Recycling
                                    </Heading>
                                    <div className="flex flex-wrap gap-1.5 self-stretch">
                                      <Text as="p" className="self-end">
                                        Battery Recycling
                                      </Text>
                                      <Text as="p" className="self-end">
                                        |
                                      </Text>
                                      <Text as="p" className="self-end">
                                        Bengaluru
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="h-px bg-gray-200" />
                            </div>
                            <Heading as="h4" className="mt-3.5 self-stretch !font-normal leading-5">
                              <>
                                Lorem ipsum dolor sit amet consectetur. Nulla urna quis ipsum lectus adipiscing. Egestas
                                et mi tortor pretium convallis. Vel eu tincidunt commodo quisque nunc sit ac vulputate
                                orci. Tincidunt vel vel ultricies enim integer ac blandit. Vestibulum maecenas cursus
                                feugiat vestibulum congue. Turpis sit enim tincidunt blandit. Pellentesque porttitor
                                scelerisque ut risus facilisis dignissim in amet hendrerit. Porttitor risus netus et in.
                                Lacus tincidunt dignissim risus quam diam vivamus proin volutpat.
                                <br />
                                Massa ut et sed mattis tristique.
                                <br />
                                Pulvinar vehicula tellus ut egestas leo sed. Malesuada auctor vestibulum luctus maecenas
                                maecenas aliquam tellus viverra.
                              </>
                            </Heading>
                            <Img
                              src="images/img_unsplash_shr_xn8s8qu.png"
                              alt="unsplash image"
                              className="mt-4 h-[274px] w-[64%] self-start object-cover"
                            />
                            <Heading as="h5" className="mt-4 self-stretch !font-normal leading-5">
                              Pulvinar vehicula tellus ut egestas leo sed. Malesuada auctor vestibulum luctus maecenas
                              maecenas aliquam tellus viverra.
                            </Heading>
                            <a href="#" className="mt-2.5 self-end">
                              <Heading size="headingxs" as="h6" className="!text-teal-800">
                                READ MORE
                              </Heading>
                            </a>
                            <div className="mt-[18px] h-px self-stretch bg-gray-200" />
                            <Text as="p" className="mt-[18px] self-start">
                              4 days ago
                            </Text>
                          </div>

                          {/* news feed section */}
                          <div className="mt-6 flex flex-col items-center justify-center self-stretch rounded-[12px] border border-solid border-gray-400 bg-white-a700 px-[22px] py-6 sm:p-5">
                            <div className="flex flex-col gap-4 self-stretch">
                              <div className="flex justify-between gap-5">
                                <Button className="flex h-[24px] min-w-[122px] flex-row items-center justify-center rounded-[12px] bg-green-50 px-4 text-center text-sm font-medium text-gray-800">
                                  Feature launch
                                </Button>
                                <Img
                                  src="images/img_notification.svg"
                                  alt="notification icon"
                                  className="h-[24px] w-[24px]"
                                />
                              </div>
                              <div className="flex items-center gap-2.5 md:flex-col">
                                <div className="w-[8%] rounded-[32px] border border-solid border-gray-200 bg-white-a700 md:w-full">
                                  <Img
                                    src="images/img_image_150.png"
                                    alt="image three"
                                    className="h-[64px] w-full rounded-[32px] object-cover md:h-auto"
                                  />
                                </div>
                                <div className="flex flex-1 flex-col items-start justify-center gap-1 md:self-stretch">
                                  <Heading size="headingmd" as="h6" className="!font-montserrat !text-gray-900">
                                    Ace Green Recycling
                                  </Heading>
                                  <div className="flex flex-wrap gap-1.5 self-stretch">
                                    <Text as="p" className="self-end">
                                      Battery Recycling
                                    </Text>
                                    <Text as="p" className="self-end">
                                      |
                                    </Text>
                                    <Text as="p" className="self-end">
                                      Bengaluru
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 h-px self-stretch bg-gray-200" />
                            <Heading as="p" className="mt-3.5 self-stretch !font-normal leading-5">
                              <>
                                Lorem ipsum dolor sit amet consectetur. Nulla urna quis ipsum lectus adipiscing. Egestas
                                et mi tortor pretium convallis. Vel eu tincidunt commodo quisque nunc sit ac vulputate
                                orci. Tincidunt vel vel ultricies enim integer ac blandit. Vestibulum maecenas cursus
                                feugiat vestibulum congue. Turpis sit enim tincidunt blandit. Pellentesque porttitor
                                scelerisque ut risus facilisis dignissim in amet hendrerit. Porttitor risus netus et in.
                                Lacus tincidunt dignissim risus quam diam vivamus proin volutpat.
                                <br />
                                Massa ut et sed mattis tristique.
                                <br />
                                Pulvinar vehicula tellus ut egestas leo sed. Malesuada auctor vestibulum luctus maecenas
                                maecenas aliquam tellus viverra.
                              </>
                            </Heading>
                            <a href="#" className="mt-2.5 self-end">
                              <Heading size="headingxs" as="p" className="!text-teal-800">
                                READ MORE
                              </Heading>
                            </a>
                            <div className="mt-[18px] h-px self-stretch bg-gray-200" />
                            <Text as="p" className="mt-4 self-start">
                              15-03-2024
                            </Text>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                  <div className="h-[612px] w-[30%] rounded-[12px] border border-solid border-gray-400 bg-white-a700 md:p-5" />
                </div>

                {/* investment updates section */}
                <div className="flex w-[68%] flex-col items-start justify-center rounded-[12px] border border-solid border-gray-400 bg-white-a700 px-[22px] py-6 md:w-full sm:p-5">
                  {/* fund investment section */}
                  <div className="flex flex-col gap-4 self-stretch">
                    <div className="flex justify-center">
                      <div className="flex flex-1">
                        <Text
                          as="p"
                          className="flex items-center justify-center rounded-[12px] bg-green-50 px-4 py-0.5 !font-medium"
                        >
                          Fund investment update
                        </Text>
                        <div className="flex w-[16%] items-center justify-center gap-2 rounded-[12px] bg-green-50">
                          <div className="h-[8px] w-[8px] rounded bg-teal-800" />
                          <Heading size="headingxs" as="p" className="!text-teal-800">
                            Live deal
                          </Heading>
                        </div>
                      </div>
                      <Img src="images/img_notification.svg" alt="notification icon" className="h-[24px] w-[24px]" />
                    </div>
                    <div className="flex items-center gap-2.5 md:flex-col">
                      <div className="w-[8%] rounded-[32px] border border-solid border-gray-200 bg-white-a700 md:w-full">
                        <Img
                          src="images/img_image_150.png"
                          alt="image five"
                          className="h-[64px] w-full rounded-[32px] object-cover md:h-auto"
                        />
                      </div>
                      <div className="flex flex-1 flex-col items-start justify-center gap-1 md:self-stretch">
                        <Heading size="headingmd" as="h6" className="!font-montserrat !text-gray-900">
                          Ace Green Recycling
                        </Heading>
                        <div className="flex flex-wrap gap-1.5 self-stretch">
                          <Text as="p" className="self-end">
                            Battery Recycling
                          </Text>
                          <Text as="p" className="self-end">
                            |
                          </Text>
                          <Text as="p" className="self-end">
                            Bengaluru
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 h-px self-stretch bg-gray-200" />
                  <div className="mt-3.5 flex flex-col gap-4 self-stretch">
                    <Heading as="p" className="!font-normal leading-5">
                      Lorem ipsum dolor sit amet consectetur. Nulla urna quis ipsum lectus adipiscing. Egestas et mi
                      tortor pretium convallis. Vel eu tincidunt commodo quisque nunc sit ac vulputate orci. Tincidunt
                      vel vel ultricies enim integer ac blandit. Vestibulum maecenas cursus feugiat vestibulum congue.
                      Turpis sit enim tincidunt blandit. Pellentesque porttitor scelerisque ut risus facilisis dignissim
                      in amet hendrerit. Porttitor risus netus et in.{" "}
                    </Heading>
                    <Img
                      src="images/img_unsplash_wwqrpsnbpq4.png"
                      alt="unsplash image"
                      className="h-[268px] object-cover"
                    />
                  </div>
                  <Button className="mt-6 flex h-[48px] min-w-[160px] flex-row items-center justify-center rounded-lg border border-solid border-teal-800 px-[33px] text-center text-base font-semibold uppercase tracking-[1.25px] text-teal-800 sm:px-5">
                    View deal
                  </Button>
                  <div className="mt-4 h-px self-stretch bg-gray-200" />
                  <Text as="p" className="mt-4">
                    15-03-2024
                  </Text>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
