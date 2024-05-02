import React from "react";
import "../style/JobCard.css";
import { Box, Button, Paper, Typography, styled } from "@mui/material";

const StyledPaper = styled(Paper)(() => ({
  padding: "4px 6px",
  boxShadow: "0px 2px 6px rgba(6, 6, 6, 0.05)",
  borderRadius: "10px",
  border: "1px solid rgb(230, 230, 230)",
}));

const BodyDiv = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "start",
  position: "relative",
  borderRadius: 20,
  padding: "5px !important",
  backgroundColor: "#fff",
  color: "rgba(0, 0, 0, 0.87)",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  overflow: "hidden",
  maxWidth: 360,
  boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.25) !important",
});

const StyledImage = styled("img")({
  width: "25px",
  height: "2.5rem",
});

export const JobCard = ({ referal }) => {
  return (
    <Box sx={{ padding: "24px 8px", marginTop: "8px" }}>
      <BodyDiv>
        <Box sx={{ padding: "10px" }}>
          <StyledPaper>
            <Typography
              variant="body2"
              style={{
                margin: 0,
                fontWeight: 400,
                lineHeight: 1.5,
                fontSize: 9,
              }}
            >
              ⏳ Posted 13 days ago
            </Typography>
          </StyledPaper>
        </Box>

        <Box sx={{ padding: "8px 16px" }}>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <StyledImage
              src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1713598325603_7ico7.jpg"
              alt="logo"
            />
            <Box>
              <Box>
                <Typography
                  variant="h3"
                  m={0}
                  sx={{
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "1px",
                    marginBottom: "3px",
                    color: "#8b8b8b",
                  }}
                >
                  fampay
                </Typography>
                <Typography
                  variant="h2"
                  m={0}
                  sx={{
                    fontSize: "14px",
                    lineHeight: 1.5,
                    fontWeight: "lighter",
                  }}
                >
                  Backend Engineer
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "11px", fontWeight: 500, marginTop: "5px" }}
              >
                Bangalore
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              margin: "8px 0",
              color: "rgb(77, 89, 106)",
            }}
          >
            Estimated Salary: ₹18 - 35 LPA <span> ✅</span>
          </Typography>

          <Box className="about-company">
            <p>About Company:</p>
            <Box>
              <p className="subHead">About us</p>
              <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Fugiat, vitae. Perspiciatis expedita assumenda corrupti
                corporis, quia harum ut numquam sit saepe cumque eius ipsam,
                dolores voluptatem. Fugiat labore, voluptatum itaque corporis
                delectus obcaecati amet exercitationem. Totam recusandae
                repellendus dolorem perspiciatis quaerat excepturi ullam. Culpa
                corrupti minus ad dicta quod facilis illum ducimus aliquam amet
                modi nam nobis vel, corporis, optio molestias illo quidem
                dignissimos, distinctio ut inventore esse magnam est laudantium!
                Ad rem aliquid qui nulla adipisci repellendus laudantium
                mollitia eum quibusdam. Hic adipisci harum temporibus. Quasi, ex
                deserunt officia eius natus numquam non mollitia fuga. Placeat
                dolorem a esse quaerat delectus cumque perferendis? Quo atque
                illum nisi exercitationem, optio ex expedita minus dignissimos
                provident, quisquam harum numquam reprehenderit quos voluptatem
                dolor quas. Nulla dolore nihil unde doloribus quis possimus in,
                eos veritatis, excepturi distinctio quisquam omnis, quam porro
                nam labore ipsum dolor illo perspiciatis deleniti repellendus?
                Dolores non porro commodi exercitationem illo architecto autem
                at ipsa doloremque expedita voluptas, nulla consequuntur itaque
                ipsum repellat nesciunt, ducimus quisquam eius maiores
                provident, voluptatibus tempore fugit. Obcaecati officia
                temporibus illum repellat, corrupti illo quasi voluptatem quod
                ea harum tenetur expedita, magnam iste quos nostrum soluta ullam
                laborum animi earum nihil dolorem ad?
              </p>
            </Box>
          </Box>
          <Box
            className="viewMore"
            sx={{
              textAlign: "center",
              marginBottom: "0.5rem",
              position: "relative",
              top: "-20px",
            }}
          >
            <Typography
              variant="body1"
              component="span"
              sx={{
                cursor: "pointer",
                color: "rgb(73, 67, 218)",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              View More
            </Typography>
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <Typography
              variant="h6"
              m={0}
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
                marginBottom: "3px",
                color: "#8b8b8b",
              }}
            >
              Minimum Experience
            </Typography>
            <Typography
              variant="h5"
              m={0}
              sx={{
                fontSize: "14px",
                lineHeight: 1.5,
                fontWeight: 100,
                color: "rgba(0, 0, 0, 0.87)",
              }}
            >
              2 years
            </Typography>
          </Box>
        </Box>

        <Box
          className="sec3"
          sx={{
            flexGrow: 1,
            width: "100%",
            padding: "0 15px",
            display: "flex",
            justifyContent: "flex-end",
            boxSizing: "border-box",
            flexDirection: "column",
          }}
        >
          <Box>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "rgb(85, 239, 196)",
                color: "rgb(0, 0, 0)",
                fontWeight: 500,
                padding: "8px 18px",
                borderRadius: "8px",
                margin: "5px 0",
                border: "none",
                minWidth: "64px",
                fontSize: "16px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgb(85, 239, 196)",
                },
              }}
            >
              ⚡ Easy Apply
            </Button>
          </Box>
          {referal && (
            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "rgb(73, 67, 218)",
                fontWeight: 500,
                color: "#fff",
                textTransform: "none",
                padding: "8px 20px",
                borderRadius: "8px",
                border: "none",
                margin: "5px 0",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgb(73, 67, 218)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <img
                  src="https://media.licdn.com/dms/image/D4D03AQGsnnp5ILUfcg/profile-displayphoto-shrink_800_800/0/1699863812498?e=1715212800&amp;v=beta&amp;t=N7vgqonNZXRi3NW9qhAV3CNU8Aa8h3HS5jXtKDtFYvE"
                  alt="Profile"
                  style={{
                    width: "24px",
                    height: "24px",
                    border: "1px solid white",
                    borderRadius: "50%",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 400,
                    fontSize: "1rem",
                    lineHeight: 1.5,
                    color: "inherit",
                  }}
                >
                  Ask for referral
                </Typography>
              </Box>
            </Button>
          )}
        </Box>
      </BodyDiv>
    </Box>
  );
};
