// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mzuCRszeeZdCMSdpkmycrs
// Component: sJnkaKbN1RIw
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
import Button from "../../Button"; // plasmic-import: ZhULiaU9WIpl/component
import { useScreenVariants as useScreenVariantscWoeu4D18NgU } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CWoeu4d18NgU/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_gv.module.css"; // plasmic-import: mzuCRszeeZdCMSdpkmycrs/projectcss
import sty from "./PlasmicNavBar.module.css"; // plasmic-import: sJnkaKbN1RIw/css
import ProfileIcon from "./icons/PlasmicIcon__Profile"; // plasmic-import: Z5wqV-U81oP1/icon
import gvlogoT8IjgRbslctS from "./images/gvlogo.gif"; // plasmic-import: T8IJGRbslctS/picture

createPlasmicElementProxy;

export const PlasmicNavBar__VariantProps = new Array("filled", "searchOpen");

export const PlasmicNavBar__ArgProps = new Array();

function PlasmicNavBar__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "filled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.filled
      },
      {
        path: "searchOpen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.searchOpen
      }
    ],

    [$props, $ctx, $refs]
  );

  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantscWoeu4D18NgU()
  });
  return (
    <section
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
        sty.root,
        { [sty.rootsearchOpen]: hasVariant($state, "searchOpen", "searchOpen") }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxfilled]: hasVariant($state, "filled", "filled"),
          [sty.freeBoxsearchOpen]: hasVariant(
            $state,
            "searchOpen",
            "searchOpen"
          )
        })}
      >
        <p.PlasmicImg
          data-plasmic-name={"gvlogo"}
          data-plasmic-override={overrides.gvlogo}
          alt={""}
          className={classNames(sty.gvlogo)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? "100px"
              : "150px"
          }
          loading={"lazy"}
          src={{
            src: gvlogoT8IjgRbslctS,
            fullWidth: 480,
            fullHeight: 270,
            aspectRatio: undefined
          }}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__rFSj
          )}
        >
          <React.Fragment>
            <span
              className={"plasmic_default__all plasmic_default__span"}
              style={{ color: "#FFFFFF", fontWeight: 700 }}
            >
              {"USERNAME"}
            </span>
          </React.Fragment>
        </div>
        <ProfileIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />

        <Button
          data-plasmic-name={"deposit"}
          data-plasmic-override={overrides.deposit}
          className={classNames("__wab_instance", sty.deposit)}
          endIcon={null}
          startIcon={null}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__kaYa4
            )}
          >
            {"DEPOSIT"}
          </div>
        </Button>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__tOZg
          )}
        >
          <React.Fragment>
            <span
              className={"plasmic_default__all plasmic_default__span"}
              style={{ color: "#FFFFFF", fontWeight: 700 }}
            >
              {"BALANCE:"}
            </span>
            <React.Fragment>{"\n"}</React.Fragment>
            <span
              className={"plasmic_default__all plasmic_default__span"}
              style={{ color: "#FFFFFF", fontWeight: 700 }}
            >
              {"ZAR 0.00"}
            </span>
            <React.Fragment>{"\n"}</React.Fragment>
          </React.Fragment>
        </div>
      </p.Stack>
    </section>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "gvlogo", "svg", "deposit"],
  freeBox: ["freeBox", "gvlogo", "svg", "deposit"],
  gvlogo: ["gvlogo"],
  svg: ["svg"],
  deposit: ["deposit"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavBar__ArgProps,
          internalVariantPropNames: PlasmicNavBar__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavBar";
  } else {
    func.displayName = `PlasmicNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBar = Object.assign(
  // Top-level PlasmicNavBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    gvlogo: makeNodeComponent("gvlogo"),
    svg: makeNodeComponent("svg"),
    deposit: makeNodeComponent("deposit"),
    // Metadata about props expected for PlasmicNavBar
    internalVariantProps: PlasmicNavBar__VariantProps,
    internalArgProps: PlasmicNavBar__ArgProps
  }
);

export default PlasmicNavBar;
/* prettier-ignore-end */
