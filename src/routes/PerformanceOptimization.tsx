import Debounce from "../components/PerformanceOptimization/Debounce";
import Menu from "../components/Menu/Menu";
import { MenuOptions } from "../components/Menu/types";

const performanceOptimizationOptions: MenuOptions[] = [
  {
    path: "/performance-optimization/debounce",
    name: "Debounce",
  },
];

const PerformanceOptimization = [
  {
    path: "/performance-optimization",
    element: <Menu options={performanceOptimizationOptions} />,
  },
  {
    path: "/performance-optimization/debounce",
    element: <Debounce />,
  },
];

export default PerformanceOptimization;
