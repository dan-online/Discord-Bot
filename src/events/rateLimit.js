module.exports = {
  name: "rateLimit",
  event(client, info) {
    log("lmit")(
      "ratelimited for " +
        info.limit +
        " actions and " +
        Math.round((info.timeout / 1000) * 100) / 100 +
        "s"
    );
  },
};
