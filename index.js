import Replicate from "replicate";
import 'dotenv/config';

const token = process.env.REPLICATE_API_TOKEN;

const replicate = new Replicate({
  auth: token,
});

const model = "stability-ai/sdxl";
const version = "39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b"

async function main () {
  if (!token) {
    throw new Error("Please set your REPLICATE_API_TOKEN environment variable.");
  }

  const output = await replicate.run(
    `${model}:${version}`,
    {
      input: {
        prompt: "An astronaut riding a rainbow unicorn, cinematic, dramatic",
      }
    }
  );

  console.log(output);
}

main().then(() => {
  console.log("Done!");
}).catch(err => {
  console.error("Uh oh, an error occurred.");
  console.error(err);
})