const { Router } = require("express");
const path = require("path");
const multer = require("multer");
const {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
} = require("../controllers/message.controller");
const { success, error } = require("../utils/response");
const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router
  .get("/", (req, res) => {
    getMessages(req)
      .then((messageList) => {
        success(req, res, messageList, 200);
      })
      .catch((e) => {
        error(req, res, "Unexpected Error", 500, e);
      });
  })
  .post("/", upload.single("file"), (req, res) => {
    addMessage(req, res)
      .then((fullMessage) => {
        success(req, res, fullMessage, 201);
      })
      .catch((e) => {
        error(req, res, "Información invalida", 400, "Error en el controlador");
      });
  })
  .patch("/:id", (req, res) => {
    console.log(req.params.id);
    updateMessage(req)
      .then((data) => {
        success(req, res, data, 200);
      })
      .catch((e) => {
        error(req, res, "Internal Error", 500, e);
      });
  })
  .delete("/:id", (req, res) => {
    deleteMessage(req)
      .then(() => {
        success(req, res, `User ${req.params.id} deleted`, 200);
      })
      .catch((e) => {
        error(req, res, "Internal Error", 500, e);
      });
  });

module.exports = router;
