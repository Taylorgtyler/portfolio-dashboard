import * as React from "react";
import { motion } from "framer-motion";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Path = (props) => (
  <motion.div
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      >
        <Bars2Icon className="h-6 w-6" />
      </Path>
      <Path
        variants={{
          closed: { opacity: 0 },
          open: { opacity: 1 },
        }}
        transition={{ duration: 0.1 }}
      >
        <XMarkIcon className="h-6 w-6" />
      </Path>
    </svg>
  </button>
);
