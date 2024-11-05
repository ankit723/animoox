import { SVGAttributes } from "react";

export const PasswordHideIcon = ({
  fill = "currentcolor",
  height = 18,
  width = 22,
  ...props
}: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.98 2.073C10.4016 2.0241 10.8256 1.99973 11.25 2C15.914 2 19.65 4.903 21.25 9C20.8627 9.99659 20.3394 10.9348 19.695 11.788M5.77 3.519C3.73 4.764 2.15 6.693 1.25 9C2.85 13.097 6.586 16 11.25 16C13.1821 16.0102 15.0792 15.484 16.73 14.48M9.13 6.88C8.8514 7.1586 8.6304 7.48935 8.47963 7.85335C8.32885 8.21736 8.25125 8.6075 8.25125 9.0015C8.25125 9.3955 8.32885 9.78564 8.47963 10.1496C8.6304 10.5137 8.8514 10.8444 9.13 11.123C9.4086 11.4016 9.73934 11.6226 10.1034 11.7734C10.4674 11.9242 10.8575 12.0018 11.2515 12.0018C11.6455 12.0018 12.0356 11.9242 12.3996 11.7734C12.7637 11.6226 13.0944 11.4016 13.373 11.123"
        stroke="#091DF6"
        strokeOpacity="0.984314"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.25 1L19.25 17"
        stroke="#091DF6"
        strokeOpacity="0.984314"
        strokeLinecap="round"
      />
    </svg>
  );
};
