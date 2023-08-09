import Button from "@common/button";
import { Container } from "@common/container";
import Text, { Align, Size, Weight } from "@common/text";
import Title from "@common/title";
import { useGetAdsWithId } from "@hooks/ads/use-ads-id";
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
              className="w-full h-[250px] object-cover my-4 rounded rounded-1xl"
            />{" "}
            <Title level={3} text={ad.title} className="mt-2" />
            <Text size={Size.XSMall} text={ad.description} className="mt-2" />
            <Text
              size={Size.XSMall}
              text={ad.state}
              textAlign={Align.Right}
              className="mt-2"
            />
            <Text size={Size.XSMall} text={"location"} className="mt-2" />
            <Text size={Size.XSMall} text={`${ad.price}€`} className="mt-2 font-bold" />
          </Container>
          <Container className="flex md:flex-col justify-center md:border rounded md:rounded-2xl md:h-[200px] md:w-[200px] h-10 md:p-5 md:mt-20 mt-10 mb-5 w-3/4 items-center ">
            <Container>
              <Text text="seller name" size={Size.XSMall} />
            </Container>
            <Button text="Send a message" onClick={() => console.log("couc")} />
          </Container>
        </Container>
      ) : (
        <p>No ad found</p>
      )}
    </div>
  );
};

export default AdDetailsPage;
