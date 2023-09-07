// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mzuCRszeeZdCMSdpkmycrs
// Component: oW6vRYQSy8Ko
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavBar from "../../NavBar"; // plasmic-import: sJnkaKbN1RIw/component
import Gamecontainers from "../../Gamecontainers"; // plasmic-import: FudiOxfuM-P6/component
import { useScreenVariants as useScreenVariantscWoeu4D18NgU } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CWoeu4d18NgU/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_gv.module.css"; // plasmic-import: mzuCRszeeZdCMSdpkmycrs/projectcss
import sty from "./PlasmicNewGames.module.css"; // plasmic-import: oW6vRYQSy8Ko/css
import HomeIcon from "./icons/PlasmicIcon__Home"; // plasmic-import: Kd2MFf3GbQ5_/icon
import newSlotspng1P7OWD89Yy0 from "./images/newSlotspng.png"; // plasmic-import: 1P7o-wD89yy0/picture
import grandpng2WfRnZvWhXv5 from "./images/grandpng2.png"; // plasmic-import: wfRn-zvWHXv5/picture
import majorornamentpngBbFhQVirgbs from "./images/majorornamentpng.png"; // plasmic-import: _bbFhQVirgbs/picture
import minorpngVei898MEgnN from "./images/minorpng.png"; // plasmic-import: Vei898-mEgnN/picture
import minipng8ROhTd992RlW from "./images/minipng.png"; // plasmic-import: 8ROhTD992RlW/picture
import palmtreasuresTlszrL49Oo3 from "./images/palmtreasures.png"; // plasmic-import: TlszrL49oo_3/picture
import shoe15G4Jc91KueZqy from "./images/shoe15.png"; // plasmic-import: g4JC91KueZQY/picture

createPlasmicElementProxy;

export const PlasmicNewGames__VariantProps = new Array();

export const PlasmicNewGames__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicNewGames__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantscWoeu4D18NgU()
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <NavBar
            data-plasmic-name={"nav"}
            data-plasmic-override={overrides.nav}
            className={classNames("__wab_instance", sty.nav)}
          />

          <section
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames(projectcss.all, sty.header)}
          >
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <p.Stack
                as={"div"}
                data-plasmic-name={"banner"}
                data-plasmic-override={overrides.banner}
                hasGap={true}
                className={classNames(projectcss.all, sty.banner)}
              >
                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"freeBox"}
                    data-plasmic-override={overrides.freeBox}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox)}
                  >
                    {(
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? true
                        : true
                    ) ? (
                      <p.PlasmicImg
                        data-plasmic-name={"newslot"}
                        data-plasmic-override={overrides.newslot}
                        alt={""}
                        className={classNames(sty.newslot)}
                        displayHeight={
                          hasVariant(globalVariants, "screen", "mobileOnly")
                            ? "120px"
                            : "150px"
                        }
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"auto"}
                        loading={"lazy"}
                        src={{
                          src: newSlotspng1P7OWD89Yy0,
                          fullWidth: 475,
                          fullHeight: 475,
                          aspectRatio: undefined
                        }}
                      />
                    ) : null}
                  </p.Stack>
                ) : null}
                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__ydgLo)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"120px"}
                    loading={"lazy"}
                    src={{
                      src: newSlotspng1P7OWD89Yy0,
                      fullWidth: 475,
                      fullHeight: 475,
                      aspectRatio: undefined
                    }}
                  />
                ) : null}
              </p.Stack>
            ) : null}
          </section>
          <section
            data-plasmic-name={"homenav"}
            data-plasmic-override={overrides.homenav}
            className={classNames(projectcss.all, sty.homenav)}
          >
            <HomeIcon
              data-plasmic-name={"home"}
              data-plasmic-override={overrides.home}
              className={classNames(projectcss.all, sty.home)}
              onClick={async event => {
                const $steps = {};
              }}
              role={"img"}
            />
          </section>
          <section
            data-plasmic-name={"mainbody"}
            data-plasmic-override={overrides.mainbody}
            className={classNames(projectcss.all, sty.mainbody)}
          >
            {true ? (
              <div
                data-plasmic-name={"grandjackpot"}
                data-plasmic-override={overrides.grandjackpot}
                className={classNames(projectcss.all, sty.grandjackpot)}
              >
                <div
                  data-plasmic-name={"grand"}
                  data-plasmic-override={overrides.grand}
                  className={classNames(projectcss.all, sty.grand)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__eZudl)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "200px"
                        : "500px"
                    }
                    loading={"lazy"}
                    src={{
                      src: grandpng2WfRnZvWhXv5,
                      fullWidth: 595,
                      fullHeight: 196,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__laYx
                    )}
                  >
                    {"GRAND JACKPOT"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__l4IPg
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"1234569 GVK"}
                      </span>
                    </React.Fragment>
                  </div>
                </div>
              </div>
            ) : null}
            {true ? (
              <div
                data-plasmic-name={"majorminormini"}
                data-plasmic-override={overrides.majorminormini}
                className={classNames(projectcss.all, sty.majorminormini)}
              >
                <div
                  data-plasmic-name={"major"}
                  data-plasmic-override={overrides.major}
                  className={classNames(projectcss.all, sty.major)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___9I3Qh)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "106px"
                        : "auto"
                    }
                    loading={"lazy"}
                    src={{
                      src: majorornamentpngBbFhQVirgbs,
                      fullWidth: 372,
                      fullHeight: 160,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oSkRk
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"MAJOR"}
                        </span>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"MAJOR JACKPOT"}
                        </span>
                      </React.Fragment>
                    )}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wa4Z
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"4565 GVK"}
                      </span>
                    </React.Fragment>
                  </div>
                </div>
                <div
                  data-plasmic-name={"minor"}
                  data-plasmic-override={overrides.minor}
                  className={classNames(projectcss.all, sty.minor)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__bASft)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: minorpngVei898MEgnN,
                      fullWidth: 375,
                      fullHeight: 170,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vzMFc
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "MINOR"
                      : "MINOR JACKPOT"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5CsVt
                    )}
                  >
                    {"789 GVK"}
                  </div>
                </div>
                <div
                  data-plasmic-name={"mini"}
                  data-plasmic-override={overrides.mini}
                  className={classNames(projectcss.all, sty.mini)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__dS7Vi)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: minipng8ROhTd992RlW,
                      fullWidth: 377,
                      fullHeight: 164,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__uBtv
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"MINI"}
                        </span>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"MINI JACKPOT"}
                        </span>
                      </React.Fragment>
                    )}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___1RtgD
                    )}
                  >
                    {"51 GVK"}
                  </div>
                </div>
              </div>
            ) : null}
            <p.Stack
              as={"div"}
              data-plasmic-name={"palmsEgtIgt"}
              data-plasmic-override={overrides.palmsEgtIgt}
              hasGap={true}
              className={classNames(projectcss.all, sty.palmsEgtIgt)}
            >
              <Gamecontainers
                data-plasmic-name={"palms"}
                data-plasmic-override={overrides.palms}
                className={classNames("__wab_instance", sty.palms)}
                img={{
                  src: palmtreasuresTlszrL49Oo3,
                  fullWidth: 736,
                  fullHeight: 424,
                  aspectRatio: undefined
                }}
              />

              <Gamecontainers
                data-plasmic-name={"egt"}
                data-plasmic-override={overrides.egt}
                className={classNames("__wab_instance", sty.egt)}
                img={{
                  src: shoe15G4Jc91KueZqy,
                  fullWidth: 736,
                  fullHeight: 424,
                  aspectRatio: undefined
                }}
              />

              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <Gamecontainers
                  data-plasmic-name={"igt"}
                  data-plasmic-override={overrides.igt}
                  className={classNames("__wab_instance", sty.igt)}
                />
              ) : null}
            </p.Stack>
            <p.Stack
              as={"div"}
              data-plasmic-name={"wazdanBallyAristo"}
              data-plasmic-override={overrides.wazdanBallyAristo}
              hasGap={true}
              className={classNames(projectcss.all, sty.wazdanBallyAristo)}
            >
              <Gamecontainers
                data-plasmic-name={"wazdan"}
                data-plasmic-override={overrides.wazdan}
                className={classNames("__wab_instance", sty.wazdan)}
                img={{
                  src: palmtreasuresTlszrL49Oo3,
                  fullWidth: 736,
                  fullHeight: 424,
                  aspectRatio: undefined
                }}
              />

              <Gamecontainers
                data-plasmic-name={"ballys"}
                data-plasmic-override={overrides.ballys}
                className={classNames("__wab_instance", sty.ballys)}
                img={{
                  src: shoe15G4Jc91KueZqy,
                  fullWidth: 736,
                  fullHeight: 424,
                  aspectRatio: undefined
                }}
              />

              <Gamecontainers
                data-plasmic-name={"aristo"}
                data-plasmic-override={overrides.aristo}
                className={classNames("__wab_instance", sty.aristo)}
              />
            </p.Stack>
            <p.Stack
              as={"div"}
              data-plasmic-name={"novo"}
              data-plasmic-override={overrides.novo}
              hasGap={true}
              className={classNames(projectcss.all, sty.novo)}
            >
              <Gamecontainers
                data-plasmic-name={"novo2"}
                data-plasmic-override={overrides.novo2}
                className={classNames("__wab_instance", sty.novo2)}
                img={{
                  src: shoe15G4Jc91KueZqy,
                  fullWidth: 736,
                  fullHeight: 424,
                  aspectRatio: undefined
                }}
              />
            </p.Stack>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "nav",
    "header",
    "banner",
    "freeBox",
    "newslot",
    "homenav",
    "home",
    "mainbody",
    "grandjackpot",
    "grand",
    "majorminormini",
    "major",
    "minor",
    "mini",
    "palmsEgtIgt",
    "palms",
    "egt",
    "igt",
    "wazdanBallyAristo",
    "wazdan",
    "ballys",
    "aristo",
    "novo",
    "novo2"
  ],

  nav: ["nav"],
  header: ["header", "banner", "freeBox", "newslot"],
  banner: ["banner", "freeBox", "newslot"],
  freeBox: ["freeBox", "newslot"],
  newslot: ["newslot"],
  homenav: ["homenav", "home"],
  home: ["home"],
  mainbody: [
    "mainbody",
    "grandjackpot",
    "grand",
    "majorminormini",
    "major",
    "minor",
    "mini",
    "palmsEgtIgt",
    "palms",
    "egt",
    "igt",
    "wazdanBallyAristo",
    "wazdan",
    "ballys",
    "aristo",
    "novo",
    "novo2"
  ],

  grandjackpot: ["grandjackpot", "grand"],
  grand: ["grand"],
  majorminormini: ["majorminormini", "major", "minor", "mini"],
  major: ["major"],
  minor: ["minor"],
  mini: ["mini"],
  palmsEgtIgt: ["palmsEgtIgt", "palms", "egt", "igt"],
  palms: ["palms"],
  egt: ["egt"],
  igt: ["igt"],
  wazdanBallyAristo: ["wazdanBallyAristo", "wazdan", "ballys", "aristo"],
  wazdan: ["wazdan"],
  ballys: ["ballys"],
  aristo: ["aristo"],
  novo: ["novo", "novo2"],
  novo2: ["novo2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNewGames__ArgProps,
          internalVariantPropNames: PlasmicNewGames__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNewGames__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewGames";
  } else {
    func.displayName = `PlasmicNewGames.${nodeName}`;
  }
  return func;
}

export const PlasmicNewGames = Object.assign(
  // Top-level PlasmicNewGames renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    nav: makeNodeComponent("nav"),
    header: makeNodeComponent("header"),
    banner: makeNodeComponent("banner"),
    freeBox: makeNodeComponent("freeBox"),
    newslot: makeNodeComponent("newslot"),
    homenav: makeNodeComponent("homenav"),
    home: makeNodeComponent("home"),
    mainbody: makeNodeComponent("mainbody"),
    grandjackpot: makeNodeComponent("grandjackpot"),
    grand: makeNodeComponent("grand"),
    majorminormini: makeNodeComponent("majorminormini"),
    major: makeNodeComponent("major"),
    minor: makeNodeComponent("minor"),
    mini: makeNodeComponent("mini"),
    palmsEgtIgt: makeNodeComponent("palmsEgtIgt"),
    palms: makeNodeComponent("palms"),
    egt: makeNodeComponent("egt"),
    igt: makeNodeComponent("igt"),
    wazdanBallyAristo: makeNodeComponent("wazdanBallyAristo"),
    wazdan: makeNodeComponent("wazdan"),
    ballys: makeNodeComponent("ballys"),
    aristo: makeNodeComponent("aristo"),
    novo: makeNodeComponent("novo"),
    novo2: makeNodeComponent("novo2"),
    // Metadata about props expected for PlasmicNewGames
    internalVariantProps: PlasmicNewGames__VariantProps,
    internalArgProps: PlasmicNewGames__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "New Games",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewGames;
/* prettier-ignore-end */
