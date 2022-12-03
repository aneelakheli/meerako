import React from "react";
import Cookies from "cookies";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, TextInput, Button, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";

export const Dashboard = () => {
  const login = Cookies?.access ?? false;
  const router = useRouter();
  useEffect(() => {
    if (!login) {
      router.push("/login");
    }
    return;
  }, [login]);
  const form = useForm({
    initialValues: {
      product: "",
    },
  });
  return (
    <Box sx={{ maxWidth: 500 }} mx="auto ">
      <form
        onSubmit={form.onSubmit((value) => {
          axios
            .post("api/products", value)
            .then(() => {
              router.push("/");
            })
            .catch((error) => {
              console.log("Error in product dashboard..", error);
            });
        })}
      >
        <TextInput
          withAsterisk
          label="Product"
          placeholder="Enter your product name"
          {...form.getInputProps("product")}
        />
        <Group position="center" mt="md">
          <Button type="submit">submit</Button>
        </Group>
      </form>
    </Box>
  );
};
