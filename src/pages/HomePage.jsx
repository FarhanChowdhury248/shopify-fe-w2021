import React, { useEffect, useState } from "react";
import { useApi } from "../shared/api";
import styled from "styled-components";
import { Image, PageHeader, PageTracker } from "../shared/components";
import {
  Dimmer,
  Loader,
  Image as SemanticImage,
  Segment,
} from "semantic-ui-react";

export const HomePage = () => {
  const { getPhotosBySol } = useApi();
  const [data, setData] = useState(null);
  const [nextData, setNextData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (data === null) {
      getPhotosBySol(page).then((data) => setData(data.photos));
      getPhotosBySol(page + 1).then((data) => setNextData(data.photos));
    }
  }, [data]);

  useEffect(() => setData(null), [page]);

  return (
    <>
      <PageHeader
        header="Martian Photos Await"
        subHeader="View the photos from NASA's rovers on Mars."
      />
      {data === null || nextData === null ? (
        <DataLoader />
      ) : (
        <>
          <PageTracker
            page={page}
            showLeft={page > 1}
            showRight={nextData.length > 0}
            onClickLeft={() => setPage(page - 1)}
            onClickRight={() => setPage(page + 1)}
          />
          <ImagesWrapper>
            {data.map((data, i) => (
              <Image isGray={i % 2 === 1} data={data} />
            ))}
          </ImagesWrapper>
          <PageTracker
            page={page}
            showLeft={page > 1}
            showRight={nextData.length > 0}
            onClickLeft={() => setPage(page - 1)}
            onClickRight={() => setPage(page + 1)}
          />
        </>
      )}
    </>
  );
};

const DataLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      padding: "4rem",
    }}
  >
    <Segment>
      <Dimmer active>
        <Loader />
      </Dimmer>
      <SemanticImage src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    </Segment>
  </div>
);

const ImagesWrapper = styled.div``;
