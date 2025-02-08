import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector;
