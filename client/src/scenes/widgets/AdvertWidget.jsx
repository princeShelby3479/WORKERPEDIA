import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={`${process.env.REACT_APP_API_URL}/assets/Worker_2.jpg`}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>KingFisher Labour Hire</Typography>
        <Typography color={medium}>kingfisher.labour.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      "Unlock your potential with Kingfisher Labours. Join our dynamic team of skilled workers and experience rewarding opportunities. Competitive pay, diverse projects, and a supportive community await. Elevate your career – apply today and build your future with us!"
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
