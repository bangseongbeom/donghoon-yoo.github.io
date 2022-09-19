import React, { ReactNode } from "react";
import styled, { useTheme } from "styled-components";
import {
  FiGrid,
  FiGithub,
  FiMail,
  FiUser,
  FiSun,
  FiMoon,
  FiMenu,
} from "react-icons/fi";
import BlogConfig from "../../../../config";
import { Link, ResponsibleDivider, VisibilityController } from "../..";
import { LinkProp } from "../../Basic/Link";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, openMenu } from "../../../reducers/navigation/menu";

const GlobalNavigationBlock = styled.div`
  width: 100%;
  height: 50px;
`;

type GlobalNavigationWrapperProp = {
  show: boolean;
};

const GlobalNavigationWrapper = styled.div<GlobalNavigationWrapperProp>`
  width: 100%;
  height: 50px;

  position: fixed;
  top: ${(props) => (props.show ? "0px" : "-50px")};
  left: 0;

  z-index: 9999;

  transition: top 0.2s ease-in-out;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  gap: 16px;
  box-sizing: border-box;

  line-height: 0;

  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid ${(props) => props.theme.colors.divider};
`;

const BrandWrapper = styled.div`
  font-weight: 500;
  font-size: ${(props) => props.theme.font.size.normal};
  color: ${(props) => props.theme.colors.primary};
`;

type BrandProps = {
  link: string;
  children: ReactNode;
};

const Brand = ({ link, children }: BrandProps) => {
  return (
    <BrandWrapper>
      <Link link={link}>{children}</Link>
    </BrandWrapper>
  );
};

type MenuProps = {
  isOpen: boolean;
};

const Menu = styled.div<MenuProps>`
  display: flex;
  flex-direction: row;
  gap: 16px;

  & svg {
    width: 16px;
    height: 16px;

    margin-top: -0.1px;

    cursor: pointer;
    stroke-width: 1px;
    stroke: ${(props) => props.theme.colors.primary};
  }

  & svg path {
    transition: fill 0.3s;
  }

  & svg:hover path {
    stroke: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 720px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 0px;

    position: fixed;
    top: 50px;
    left: 0;

    width: 100%;
    height: calc(100% - 50px);

    overflow-y: auto;

    background-color: ${(props) => props.theme.colors.background};
    border-bottom: 1px solid ${(props) => props.theme.colors.divider};
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const ThemeToggleWrapper = styled.div`
  & > :first-child {
    display: ${(props) => (props.theme.name === "light" ? "block" : "none")};
  }
  & > :last-child {
    display: ${(props) => (props.theme.name === "dark" ? "block" : "none")};
  }
`;

const NavigationLinkLabel = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.font.size.small};
  font-weight: 400;

  display: none;

  @media (max-width: 720px) {
    display: block;
  }
`;

const NavigationLinkContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  @media (max-width: 720px) {
    padding: 16px 16px;
  }
`;

type NavigationLinkProp = {
  label: string;
  children: ReactNode;
};

const NavigationLink = (props: NavigationLinkProp & LinkProp) => {
  return (
    <Link {...props}>
      <NavigationLinkContentWrapper>
        {props.children}{" "}
        <NavigationLinkLabel>{props.label}</NavigationLinkLabel>
      </NavigationLinkContentWrapper>
    </Link>
  );
};

type Props = {
  toggleTheme: () => void;
};

export const GlobalNavigation = ({ toggleTheme }: Props) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  // @ts-ignore
  const { isOpen } = useSelector((state) => state.navigationMenu);

  const { github, email } = BlogConfig.links;

  return (
    <>
      <GlobalNavigationBlock />
      <GlobalNavigationWrapper show={true}>
        <Brand link="/">{BlogConfig.components.globalNavigation.brand}</Brand>
        <div>
          <VisibilityController
            property="max-width"
            value="720px"
            reverse={true}
          >
            <FiMenu onClick={() => dispatch(isOpen ? closeMenu : openMenu)} />
          </VisibilityController>
          <Menu isOpen={isOpen}>
            <Group>
              <NavigationLink label="GitHub" link={github} external={true}>
                <FiGithub />
              </NavigationLink>
              <NavigationLink label="E-Mail" link={email} external={true}>
                <FiMail />
              </NavigationLink>
              <NavigationLink label="Resume" link="/resume">
                <FiUser />
              </NavigationLink>
            </Group>
            <ResponsibleDivider />
            <Group>
              <NavigationLink label="Series" link="/series">
                <FiGrid />
              </NavigationLink>
            </Group>
            <ResponsibleDivider />
            <Group>
              <ThemeToggleWrapper theme={theme} onClick={toggleTheme}>
                <div>
                  <NavigationLinkContentWrapper>
                    <FiSun />{" "}
                    <NavigationLinkLabel>
                      Switch color preference
                    </NavigationLinkLabel>
                  </NavigationLinkContentWrapper>
                </div>
                <div>
                  <NavigationLinkContentWrapper>
                    <FiMoon />{" "}
                    <NavigationLinkLabel>
                      Switch color preference
                    </NavigationLinkLabel>
                  </NavigationLinkContentWrapper>
                </div>
              </ThemeToggleWrapper>
            </Group>
          </Menu>
        </div>
      </GlobalNavigationWrapper>
    </>
  );
};
