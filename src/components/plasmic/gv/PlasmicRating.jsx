// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mzuCRszeeZdCMSdpkmycrs
// Component: znjC41HgI5b6
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_gv.module.css"; // plasmic-import: mzuCRszeeZdCMSdpkmycrs/projectcss
import sty from "./PlasmicRating.module.css"; // plasmic-import: znjC41HgI5b6/css
import EmptyStarIcon from "./icons/PlasmicIcon__EmptyStar"; // plasmic-import: eZ-4ILLeh3Op/icon
import FullStarIcon from "./icons/PlasmicIcon__FullStar"; // plasmic-import: pzoF8PVhCGg5/icon
import HalfStarIcon from "./icons/PlasmicIcon__HalfStar"; // plasmic-import: GRVCl50eX3Fy/icon

createPlasmicElementProxy;

export const PlasmicRating__VariantProps = new Array("rating");

export const PlasmicRating__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicRating__RenderFunc(props) {
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
        path: "rating",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.rating
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
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "half")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : hasVariant($state, "rating", "one")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg___9K4Le, {
          [sty.svgrating_five___9K4Leb8F5N]: hasVariant(
            $state,
            "rating",
            "five"
          ),

          [sty.svgrating_fourHalf___9K4Le6G3Cz]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),

          [sty.svgrating_four___9K4Lev3QRi]: hasVariant(
            $state,
            "rating",
            "four"
          ),

          [sty.svgrating_half___9K4LerDh6T]: hasVariant(
            $state,
            "rating",
            "half"
          ),

          [sty.svgrating_oneHalf___9K4Leyio5I]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),

          [sty.svgrating_one___9K4LeLscy7]: hasVariant($state, "rating", "one"),
          [sty.svgrating_threeHalf___9K4LehGrCu]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),

          [sty.svgrating_three___9K4LeIMdlg]: hasVariant(
            $state,
            "rating",
            "three"
          ),

          [sty.svgrating_twoHalf___9K4LeVb9PF]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),

          [sty.svgrating_two___9K4LezDSwU]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__thUkG, {
          [sty.svgrating_five__thUkGb8F5N]: hasVariant(
            $state,
            "rating",
            "five"
          ),

          [sty.svgrating_fourHalf__thUkG6G3Cz]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),

          [sty.svgrating_four__thUkGv3QRi]: hasVariant(
            $state,
            "rating",
            "four"
          ),

          [sty.svgrating_oneHalf__thUkGyio5I]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),

          [sty.svgrating_threeHalf__thUkGhGrCu]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),

          [sty.svgrating_three__thUkGiMdlg]: hasVariant(
            $state,
            "rating",
            "three"
          ),

          [sty.svgrating_twoHalf__thUkGvb9PF]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),

          [sty.svgrating_two__thUkGzDSwU]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__fh8A, {
          [sty.svgrating_five__fh8Ab8F5N]: hasVariant($state, "rating", "five"),
          [sty.svgrating_fourHalf__fh8A6G3Cz]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),

          [sty.svgrating_four__fh8Av3QRi]: hasVariant($state, "rating", "four"),
          [sty.svgrating_threeHalf__fh8AhGrCu]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),

          [sty.svgrating_three__fh8AIMdlg]: hasVariant(
            $state,
            "rating",
            "three"
          ),

          [sty.svgrating_twoHalf__fh8AVb9PF]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          )
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__fbshs, {
          [sty.svgrating_five__fbshSb8F5N]: hasVariant(
            $state,
            "rating",
            "five"
          ),

          [sty.svgrating_fourHalf__fbshs6G3Cz]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),

          [sty.svgrating_four__fbshSv3QRi]: hasVariant(
            $state,
            "rating",
            "four"
          ),

          [sty.svgrating_threeHalf__fbshShGrCu]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          )
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__vvZh8, {
          [sty.svgrating_five__vvZh8B8F5N]: hasVariant(
            $state,
            "rating",
            "five"
          ),

          [sty.svgrating_fourHalf__vvZh86G3Cz]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          )
        })}
        role={"img"}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicRating__ArgProps,
          internalVariantPropNames: PlasmicRating__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicRating__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRating";
  } else {
    func.displayName = `PlasmicRating.${nodeName}`;
  }
  return func;
}

export const PlasmicRating = Object.assign(
  // Top-level PlasmicRating renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicRating
    internalVariantProps: PlasmicRating__VariantProps,
    internalArgProps: PlasmicRating__ArgProps
  }
);

export default PlasmicRating;
/* prettier-ignore-end */
