import {
  Button,
  Box,
  MultiSelect,
  Group,
  TextInput,
  Textarea,
  Paper,
  Grid,
  Select,
  Flex,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useViewportSize } from "@mantine/hooks";
import { DatePickerInput } from "@mantine/dates";
import React from "react";
import "./Form.css";

const isValid = (value) => {
  let linkArr = value.split(",");
  if (linkArr[0] === " " || linkArr[0] === "-") return true;
  const linkValid = [];
  let j = 0;
  for (let i = 0; i < linkArr.length; i++) {
    if (linkArr[i].startsWith("www.")) {
      linkValid[j++] = linkArr[i];
    }
  }
  if (linkArr.length == linkValid.length) return true;
  else return false;
};

export default function Form() {
  const { width } = useViewportSize();
  const [page, setPage] = React.useState(1);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
      links: "",
      university: "",
      specialization: "",
      graduationdate: null,
      languages: [],
      frameworks: [],
      experience: "",
      projects: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      firstname: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      lastname: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      phone: (value) =>
        /[^0-9]/.test(value) || value.length != 10
          ? "Invalid phone number"
          : null,
      links: (value) => (isValid(value) ? null : "Invalid links"),
    },
  });

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Box maw={width * 0.5} mx="auto">
          {page === 1 && (
            <Paper shadow="lg" p="xl" radius="md">
              <h1 className="branding" style={{ margin: 0, marginBottom: 15, padding: 0 }}>
                SwiftCV
              </h1>
              <Grid>
                <Grid.Col span={12}>
                <p style={{margin: 0, padding: 0}}>Let's start by filling in some basic information.</p>
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput
                    withAsterisk
                    label="First Name"
                    placeholder="ex: Catinca"
                    key={form.key("firstname")}
                    {...form.getInputProps("firstname")}
                  />

                  <TextInput
                    withAsterisk
                    label="Phone Number (RO)"
                    placeholder="07xxxxxxxx"
                    key={form.key("phone")}
                    {...form.getInputProps("phone")}
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <TextInput
                    withAsterisk
                    label="Last Name"
                    placeholder="ex: Lazar"
                    key={form.key("lastname")}
                    {...form.getInputProps("lastname")}
                  />
                  <TextInput
                    withAsterisk
                    label="Email"
                    placeholder="yourname@email.com"
                    key={form.key("email")}
                    {...form.getInputProps("email")}
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Textarea
                    withAsterisk
                    label="Social media links (LinkedIn, GitHub, etc)"
                    description="Note: Links must be comma-separated"
                    placeholder="ex: www.linkedin.com/in/catinca-lazar-319266337,www.github.com/catincalazar12345"
                    key={form.key("links")}
                    {...form.getInputProps("links")}
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Group justify="flex-end" mt="md">
                    <Button color="#3A5890" onClick={() => setPage(2)}>
                      Next
                    </Button>
                  </Group>
                </Grid.Col>
              </Grid>
            </Paper>
          )}
          {page === 2 && (
            <Paper shadow="lg" p="xl" radius="md">
              <Grid>
                <Grid.Col span={12}>
                <p style={{margin: 0, padding: 0}}>Cool! Let's move onto more serious stuff.</p>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Select
                    label="University"
                    placeholder="University of Bucharest"
                    data={[
                      "University of Bucharest",
                      "Polytechnica Bucharest",
                      "Bucharest University of Economic Studies",
                    ]}
                    key={form.key("university")}
                    {...form.getInputProps("university")}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <DatePickerInput
                    label="Graduation Date"
                    placeholder="Select a date"
                    allowDeselect
                    key={form.key("graduationdate")}
                    {...form.getInputProps("graduationdate")}
                    styles={{
                      calendarHeaderControl: {
                        fontSize: "14px",
                        width: "28px",
                        height: "28px",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <MultiSelect
                    label="Languages"
                    placeholder="C, C++, JavaScript..."
                    data={[
                      { value: "c", label: "C" },
                      { value: "cpp", label: "C++" },
                      { value: "csharp", label: "C#" },
                      { value: "java", label: "Java" },
                      { value: "javascript", label: "JavaScript" },
                      { value: "typescript", label: "TypeScript" },
                      { value: "python", label: "Python" },
                      { value: "ruby", label: "Ruby" },
                      { value: "php", label: "PHP" },
                      { value: "swift", label: "Swift" },
                    ]}
                    {...form.getInputProps("languages")}
                    searchable
                  />
                </Grid.Col>
                <Grid.Col>
                  <MultiSelect
                    label="Frameworks"
                    placeholder="React, .NET..."
                    data={["React", "Vue", "Next.js", ".NET"]}
                    key={form.key("frameworks")}
                    {...form.getInputProps("frameworks")}
                    searchable
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Textarea
                    label="Briefly describe your work experience"
                    placeholder="Interned at X, worked on React-based dashboards..."
                    key={form.key("experience")}
                    {...form.getInputProps("experience")}
                    autosize
                    minRows={3}
                  />
                </Grid.Col>

                <Grid.Col span={12}>
                  <Textarea
                    label="Briefly describe your projects"
                    placeholder="Built a portfolio website, developed a mobile app..."
                    key={form.key("projects")}
                    {...form.getInputProps("projects")}
                    autosize
                    minRows={3}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <Group justify="flex-start" mt="md">
                    <Button color="#3A5890" onClick={() => setPage(1)}>
                      Back
                    </Button>
                  </Group>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Group justify="flex-end" mt="md">
                    <Button color="#3A5890" type="submit">
                      Submit
                    </Button>
                  </Group>
                </Grid.Col>
              </Grid>
            </Paper>
          )}
        </Box>
      </form>
    </Box>
  );
}
