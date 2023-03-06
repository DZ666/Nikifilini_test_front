"use strict";
exports.__esModule = true;
exports.Statuses = exports.DeliveryCode = void 0;
var DeliveryCode;
(function (DeliveryCode) {
    DeliveryCode["pickup"] = "\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437";
    DeliveryCode["courier"] = "\u041A\u0443\u0440\u044C\u0435\u0440";
    DeliveryCode["post"] = "\u041F\u043E\u0447\u0442\u0430";
})(DeliveryCode = exports.DeliveryCode || (exports.DeliveryCode = {}));
var Statuses;
(function (Statuses) {
    Statuses["prepayed"] = "\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430";
    Statuses["sold"] = "\u041F\u0440\u043E\u0434\u0430\u043D";
    Statuses["delivered"] = "\u0414\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D";
    Statuses["paid"] = "\u041E\u043F\u043B\u0430\u0447\u0435\u043D";
    Statuses["not-paid"] = "\u041D\u0435 \u043E\u043F\u043B\u0430\u0447\u0435\u043D";
    Statuses["assembling"] = "\u0421\u0431\u043E\u0440\u043A\u0430";
    Statuses["complete"] = "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D";
    Statuses["redirect"] = "\u041F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D";
    Statuses["send-to-delivery"] = "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u0432 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443";
    Statuses["delivering"] = "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430";
    Statuses["product-is-damaged"] = "\u0422\u043E\u0432\u0430\u0440 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D";
    Statuses["returned"] = "\u0412\u043E\u0437\u0432\u0440\u0430\u0442";
    Statuses["delyvery-did-not-suit"] = "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0435 \u043F\u043E\u0434\u043E\u0448\u043B\u0430";
    Statuses["assembly-delivery"] = "\u0421\u0431\u043E\u0440\u043A\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430";
    Statuses["fail"] = "\u041D\u0435\u0443\u0434\u0430\u0447\u0430";
    Statuses["partially-completed"] = "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D";
    Statuses["confirming"] = "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435";
    Statuses["out-of-stock"] = "\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438";
    Statuses["new"] = "\u041D\u043E\u0432\u044B\u0439";
    Statuses["lost"] = "\u041F\u043E\u0442\u0435\u0440\u044F\u043D";
    Statuses["canceled"] = "\u041E\u0442\u043C\u0435\u043D\u0435\u043D";
    Statuses["no-call"] = "\u041D\u0435 \u0437\u0432\u043E\u043D\u0438\u0442\u044C";
    Statuses["in-reserve"] = "\u0412 \u0440\u0435\u0437\u0435\u0440\u0432\u0435";
    Statuses["wait-approved"] = "\u041E\u0436\u0438\u0434\u0430\u0435\u0442 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F";
})(Statuses = exports.Statuses || (exports.Statuses = {}));
function getStatus(statusCode) {
    return Statuses[statusCode] || statusCode;
}
exports["default"] = getStatus;
