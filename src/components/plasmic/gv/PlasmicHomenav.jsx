// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mzuCRszeeZdCMSdpkmycrs
// Component: 5-fMA3NxLlyg
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_gv.module.css"; // plasmic-import: mzuCRszeeZdCMSdpkmycrs/projectcss
import sty from "./PlasmicHomenav.module.css"; // plasmic-import: 5-fMA3NxLlyg/css
import HomeIcon from "./icons/PlasmicIcon__Home"; // plasmic-import: Kd2MFf3GbQ5_/icon

createPlasmicElementProxy;

export const PlasmicHomenav__VariantProps = new Array();

export const PlasmicHomenav__ArgProps = new Array();

function PlasmicHomenav__RenderFunc(props) {
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
  return (
    <section
      data-plasmic-name={"homenav"}
      data-plasmic-override={overrides.homenav}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.homenav
      )}
    >
      <HomeIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg)}
        onClick={async event => {
          const $steps = {};
          $steps["goToHome"] = true
            ? (() => {
                const actionArgs = { destination: `/home` };
                return (({ destination }) => {
                  location.assign(destination);
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            typeof $steps["goToHome"] === "object" &&
            typeof $steps["goToHome"].then === "function"
          ) {
            $steps["goToHome"] = await $steps["goToHome"];
          }
        }}
        role={"img"}
      />
    </section>
  );
}

const PlasmicDescendants = {
  homenav: ["homenav", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomenav__ArgProps,
          internalVariantPropNames: PlasmicHomenav__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomenav__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "homenav") {
    func.displayName = "PlasmicHomenav";
  } else {
    func.displayName = `PlasmicHomenav.${nodeName}`;
  }
  return func;
}

export const PlasmicHomenav = Object.assign(
  // Top-level PlasmicHomenav renders the root element
  makeNodeComponent("homenav"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicHomenav
    internalVariantProps: PlasmicHomenav__VariantProps,
    internalArgProps: PlasmicHomenav__ArgProps
  }
);

export default PlasmicHomenav;
/* prettier-ignore-end */