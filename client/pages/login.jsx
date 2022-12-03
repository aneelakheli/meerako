import { useForm } from "@mantine/form";
import { Box, TextInput, PasswordInput, Button, Group } from "@mantine/core";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "cookies";

export default function Login() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => {
          axios
            .post("api/login", values)
            .then(() => {
              console.log("Successfully Login");
              router.push("/");
            })
            .catch((error) => {
              console.log("Error Occured..", error);
            });
        })}
      >
        <TextInput
          withAsterisk
          label="Email"
          placeholder="Enter your email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          withAsterisk
          label="password"
          placeholder="Enter your password"
          {...form.getInputProps("password")}
        />
        <Group position="center" mt="md">
          <Button type="submit">submit</Button>
        </Group>
      </form>
    </Box>
  );
}
