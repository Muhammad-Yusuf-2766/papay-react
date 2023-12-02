import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Stack,
  Tab,
  Typography,
} from "@mui/material";
import React from "react";
import "../../../css/help.css";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function HelpPage() {
  const [value, setValue] = React.useState("1");

  const faq = [
    {
      question: "To'lov qanday amalga oshiriladi",
      answer:
        "To'lovni payme, click ilovalari orqali amalga oshirishingiz mumkin ",
    },
    {
      question: "Sayt rivoji uchun o'z hissangizni qo'shing",
      answer: "Albatta buning uchun o'z hissamni qo'shmoqchiman ",
    },
    {
      question: "To'lov qanday amalga oshiriladi",
      answer:
        "To'lovni payme, click ilovalari orqali amalga oshirishingiz mumkin ",
    },
    {
      question:
        "Saytdan to'laqonli yani buyurtmalar qilish, jonli muloqotlardan foydalanishingiz uchun ro'yxatdan o'tishingiz shart.",
      answer:
        "Jonli muloqot vaqtida bexayo so'zlarni ishlatish mutlaqo taqiqlanadi. ",
    },
    {
      question: "To'lov qanday amalga oshiriladi",
      answer:
        "To'lovni payme, click ilovalari orqali amalga oshirishingiz mumkin ",
    },
    {
      question: "To'lov qanday amalga oshiriladi",
      answer:
        "To'lovni payme, click ilovalari orqali amalga oshirishingiz mumkin ",
    },
    {
      question: "To'lov qanday amalga oshiriladi",
      answer:
        "To'lovni payme, click ilovalari orqali amalga oshirishingiz mumkin ",
    },
    {
      question: "Sayt rivoji uchun o'z hissangizni qo'shing",
      answer: "Albatta buning uchun o'z hissamni qo'shmoqchiman ",
    },
    {
      question: "To'lov qanday amalga oshiriladi",
      answer:
        "To'lovni payme, click ilovalari orqali amalga oshirishingiz mumkin ",
    },
    {
      question: "To'lov qanday amalga oshiriladi",
      answer:
        "To'lovni payme, click ilovalari orqali amalga oshirishingiz mumkin ",
    },
    {
      question: "Sayt rivoji uchun o'z hissangizni qo'shing",
      answer: "Albatta buning uchun o'z hissamni qo'shmoqchiman ",
    },
  ];

  const rules = [
    `Saytdan to'laqonli yani buyurtmalar qilish,
    jonli muloqotdan foydalanishingiz uchun ro'yxatdan o'tishingiz shart`,
    `Jonli muloqot vaqtida bexayo so'zlarni ishlatish mutlaqo taqiqlanadi.`,
    `Saytdan to'laqonli yani buyurtmalar qilish,
    jonli muloqotdan foydalanishingiz uchun ro'yxatdan o'tishingiz shart`,
    `Barcha xarakatlaringiz adminlarimiz 
    nazorati ostida bo'lganligi sabab, iltimos talablarga rioya qiling`,
  ];

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"help_page"}>
      <Container sx={{ mt: "50px", mb: "50px" }}>
        <TabContext value={value}>
          <Box className={"help_menu"}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Tab label="Qoidalar" value="1" />
                <Tab label="FAQ" value="2" />
                <Tab label="Adminga xat" value="3" />
              </TabList>
            </Box>
          </Box>
          <Stack>
            <Stack className={"help_main_content"}>
            <TabPanel value={"1"}>
                <Stack className="rules_box">
                  {rules.map((vl) => {
                    return <p>{vl}</p>;
                  })}
                </Stack>
              </TabPanel>
              <TabPanel value="2">
                <Stack className={"accordian menu"}>
                  {faq.map((ele, number) => (
                    <Accordion key={number}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>{ele.question}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{ele.answer}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Stack>
              </TabPanel>
              <TabPanel value="3">
                <Stack className={"admin_letter_box"}>
                  <Stack className={"admin_letter_container"}>
                    <Box className={"admin_letter_frame"}>
                      <span>Adminga Xabar Qoldirish</span>
                      <p>
                        Assalomu alaykum! Adminga xabar qoldirish uchun
                        formlarni to'ldiring!
                      </p>
                    </Box>
                    <form
                      action="#"
                      method="POST"
                      className="letter_form"
                    >
                      <div className={"input_letter_box"}>
                        <label>Ism</label>
                        <input type="text" name="mb_nick" placeholder="Ism" />
                      </div>
                      <div className={"input_letter_box"}>
                        <label>Elektron Manzil</label>
                        <input
                          type="text"
                          name="mb_email"
                          placeholder="Elektron Manzil"
                        />
                      </div>
                      <div className={"input_letter_box"}>
                        <label>Xabar</label>
                        <textarea name="mb_msg" placeholder="Xabar"></textarea>
                      </div>
                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        sx={{ mt: "30px" }}
                      >
                        <Button type="submit" variant="contained">
                          Jo'natish
                        </Button>
                      </Box>
                    </form>
                  </Stack>
                </Stack>
              </TabPanel>
            </Stack>
          </Stack>
        </TabContext>
      </Container>
    </div>
  );
}
