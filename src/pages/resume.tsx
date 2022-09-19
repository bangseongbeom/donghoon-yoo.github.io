import React from "react";
import styled from "styled-components";
import BlogConfig from "../../config";
import { Layout, SEO, Divider } from "../components";
import { Link } from "../components/Basic/Link";
import { StyledH4, StyledH6 } from "../components/Typography";

const Resume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  line-height: 2;
`;

const Muted = styled.span`
  color: ${(props) => props.theme.colors.tertiary};
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  word-break: keep-all;
`;

const Keywords = styled.div`
  display: flex;
  flex-direction: row column;
  flex-wrap: wrap;
  gap: 8px;
`;

const Keyword = styled.span`
  font-size: ${(props) => props.theme.font.size.small};
  font-weight: 500;

  position: relative;

  text-decoration: underline;
  -webkit-text-decoration-color: transparent;
  text-decoration-color: transparent;

  &:after {
    content: " ";
    position: absolute;
    left: 0px;
    bottom: 6px;
    width: 100%;
    height: 4px;
    opacity: 0.4;
    background-color: #33b5e5;
  }
`;

const ResumePage = () => (
  <Layout>
    <SEO
      title={BlogConfig.title}
      description={BlogConfig.description}
      url={BlogConfig.siteUrl}
    />
    <Resume>
      <div>
        <StyledH4>
          유동훈 <Muted>DongHoon Yoo</Muted>
        </StyledH4>
        <Description>
          연구를 통해 궁극의 인프라스트럭처 설계 및 개발 조직 혁신을 주도하는
          SRE/DevOps 개발자입니다. 주로 자동화, 파이프라인 최적화, Backend 서버
          개발을 하고 있습니다.
        </Description>
        <Keywords>
          <Keyword>AWS</Keyword>
          <Keyword>Linux</Keyword>
          <Keyword>Container</Keyword>
          <Keyword>Kotlin</Keyword>
          <Keyword>Spring</Keyword>
          <Keyword>Gradle</Keyword>
        </Keywords>
      </div>
      <Divider />
      <div>
        <StyledH6>
          <Link link="https://sandbox.co.kr" external={true} noreferrer={true}>
            SANDBOX NETWORK, Inc.
          </Link>{" "}
          <Muted>2020.08.-2021.12.</Muted>
        </StyledH6>
        <Description>
          샌드박스 네트워크에서 프리랜서 자격으로 비대면 행사 운영 사업에서
          시스템 책임을 담당했습니다. AWS CDK를 통한 클라우드 배포 자동화 및
          JetBrains 도구를 통한 DevOps 설계•구성을 담당하였으며 Backend 개발에
          참여했습니다. 주요 프로젝트로 궁중문화축전(문화재청, 한국문화재재단),
          노담(No 담배) 캠페인(보건복지부), 사이버과학관(국립과천과학관) 및
          Twitch Partnership Party 2020 등이 있습니다.
        </Description>
      </div>
      <div>
        <StyledH6>
          <Link
            link="https://rokaf.airforce.mil.kr/airforce/index.do"
            external={true}
            noreferrer={true}
          >
            대한민국 공군 사이버작전센터
          </Link>{" "}
          <Muted>2022.01.-2023.10.</Muted>
        </StyledH6>
        <Description>
          병역의무를 다하기 위해 대한민국 공군 정보체계관리병으로 복무하고
          있습니다. 공군 공본직할 사이버작전센터에 배속되어 정보 보호를 수행하고
          있습니다.
          <Link link="" external={true}>
            &lt;공군 사이버전사 경연대회&gt;(해킹 대회)
          </Link>
          에서 최종 1등의 성적을 거두었으며 공군 참모총장상을 수여 받았습니다.
        </Description>
      </div>
    </Resume>
  </Layout>
);

export default ResumePage;
