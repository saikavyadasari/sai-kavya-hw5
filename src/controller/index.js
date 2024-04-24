import { Activity } from "../model";

export const fetchData = async () => {
  const res = await fetch('https://www.boredapi.com/api/activity/');
  const data = await res.json()

  return Activity.serialize(data);
}