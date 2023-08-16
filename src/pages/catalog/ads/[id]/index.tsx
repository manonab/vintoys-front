import Button from "@common/button";
import { Container } from "@common/container";
import Text, { Align, Size, Weight } from "@common/text";
import Title from "@common/title";
import { useGetAdsWithId } from "@hooks/ads/get/use-ads-id";
import { useRouter } from "next/router";
import React from "react";

const AdDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { ad, isLoading, isError } = useGetAdsWithId(Number(id));
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error occurred while fetching ad details</p>
      ) : ad ? (
        <Container className="flex md:flex-row flex-col align-center items-baseline md:my-20">
          <Container className="flex flex-col mt-10">
            <img
              src={ad.thumbnail_url}
              alt="Ad Image"
              className="w-full h-[280px] object-cover my-4 rounded rounded-1xl"
            />
            <Title level={3} text={ad.title} className="m-2 font-Capuch" />
            <Text size={Size.XSMall} text={ad.description} className="m-2 font-inter" />
            <Text
              size={Size.XSMall}
              text={ad.state}
              textAlign={Align.Right}
              className="m-3 font-inter"
            />
            {/* <Text size={Size.XSMall} text={"location"} className="m-2" /> */}
            <Text
              size={Size.XSMall}
              fontWeight={Weight.ExtraBold}
              text={`${ad.price}€`}
              textAlign={Align.Right}
              className="m-3 font-bold"
            />
          </Container>
          <Container className="flex md:flex-col md:justify-evenly justify-center md:border rounded md:rounded-2xl md:h-[200px] md:w-[200px] h-10 md:p-5 md:mt-20 mt-10 mb-5 w-3/4 items-center ">
            <Container>
              <Text
                text={`@${ad.username}`}
                className="font-bold font-inter"
                size={Size.XSMall}
              />
            </Container>
            <Button
              text="Send a message"
              className="bg-yellowCapiche text-inter text-white"
              onClick={() => console.log("couc")}
            />
          </Container>
        </Container>
      ) : (
        <p>No ad found</p>
      )}
    </div>
  );
};

export default AdDetailsPage;
