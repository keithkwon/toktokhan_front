import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "components/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import "./Accordion.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();
  const [isAccident, setIsAccident] = useState("");
  const [accidentDetails, setAccidentDetails] = useState("");
  const [isImported, setIsImported] = useState("");
  const [maker, setMaker] = useState("");
  const [photos, setPhotos] = useState("");
  const [priceSuggestion, setPriceSuggestion] = useState("");

  const getPresignedUrl = async (e) => {
    const response = await axios.post(
      "http://127.0.0.1:8000/cars/getPresignedUrl/"
    );
    console.log(response);
    const files = { file: ("filename", e.target.files[0]) };
    const {
      data: { url, fields },
    } = response;
    console.log(fields);
    fields["files"] = files;
    console.log(fields);
    fields["13434123324"] = "123123123";
    console.log(fields);
    const toS3 = await axios.post(url, fields);
    console.log(toS3);
  };

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>중고차1 정보</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form action="post">
            <div>
              <span>사고이력</span>
              <label htmlFor="">
                <span>사고 이력 있음</span>
                <input
                  className="test-radio"
                  type="radio"
                  name="accident"
                  value="True"
                  onChange={(e) => setIsAccident(e.target.value)}
                  checked="checked"
                />
              </label>
              <label htmlFor="">
                <span>사고 이력 없음</span>
                <input
                  type="radio"
                  name="accident"
                  value="False"
                  onChange={(e) => setIsAccident(e.target.value)}
                />
              </label>
            </div>
            <div>
              <span>수리내역</span>
              <TextField
                id="standard-basic"
                label="Standard"
                value={accidentDetails}
                onChange={(e) => setAccidentDetails(e.target.value)}
              />
            </div>
            <div>
              <span>제조사</span>
              <label htmlFor="">
                <span>현대</span>
                <input
                  type="radio"
                  name="maker"
                  value="hyundai"
                  onChange={(e) => setMaker(e.target.value)}
                />
              </label>
              <label htmlFor="">
                <span>르노 삼성</span>
                <input
                  type="radio"
                  name="maker"
                  value="renaultsamsung"
                  onChange={(e) => setMaker(e.target.value)}
                />
              </label>
              <label htmlFor="">
                <span>기아</span>
                <input
                  type="radio"
                  name="maker"
                  value="kia"
                  onChange={(e) => setMaker(e.target.value)}
                />
              </label>
              <label htmlFor="">
                <span>쌍용</span>
                <input
                  type="radio"
                  name="maker"
                  value="ssangyong"
                  onChange={(e) => setMaker(e.target.value)}
                />
              </label>
              <label htmlFor="">
                <span>GM Daewoo</span>
                <input
                  type="radio"
                  name="maker"
                  value="gmdaewoo"
                  onChange={(e) => setMaker(e.target.value)}
                />
              </label>
              <label htmlFor="">
                <span>기타</span>
                <input
                  type="radio"
                  name="maker"
                  value="etc"
                  onChange={(e) => setMaker(e.target.value)}
                />
              </label>
            </div>
            <div>
              <span>차량사진</span>
              <input
                type="file"
                name="photos"
                id="photos"
                onChange={getPresignedUrl}
                multiple
              />
            </div>
            <div>
              <span>가격 제시하기</span>
              <input type="text" name="" id="" />
            </div>
            <div>초기화 / 임시저장</div>
            <div>판매등록하기</div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
