import config from "web.config";
import adminBankURL from "./apiUrl/adminBank";
import adminBankTypeURL from "./apiUrl/adminBankType";
import adminBusinessURL from "./apiUrl/adminBusiness";
import adminCardURL from "./apiUrl/adminCard";
import adminOrderURL from "./apiUrl/adminOrder";
import adminUserURL from "./apiUrl/adminUser";
import adminWithdrawURL from "./apiUrl/adminWithdraw";
import orderURL from "./apiUrl/order";
import securityURL from "./apiUrl/security";
import userURL from "./apiUrl/user";
import userSaleURL from "./apiUrl/userSale";
import withdrawURL from "./apiUrl/withdraw";
import bankAccountUrl from "./apiUrl/bankAccount";
import cardUrl from "./apiUrl/card";
import walletURL from "./apiUrl/wallet";
import saleURL from "./apiUrl/sale";
import contentURL from "./apiUrl/content";
import adminOverviewURL from "./apiUrl/adminOverview";

var url = config.serverUrl;

/**
 * 银行管理
 */
export var adminBank = adminBankURL(url);

/**
 * adminBankType
 */
export var adminBankType = adminBankTypeURL(url);

/**
 * 
 */
export var adminBusiness = adminBusinessURL(url);

/**
 * 
 */
export var adminCard = adminCardURL(url);

/**
 * 
 */
export var adminOrder = adminOrderURL(url);

/**
 * 
 */
export var adminUser = adminUserURL(url);

/**
 * 
 */
export var adminWithdraw = adminWithdrawURL(url);

/**
 * 
 */
export var order = orderURL(url);

/**
 * 
 */
export var security = securityURL(url);

/**
 * 
 */
export var user = userURL(url);

/**
 * 
 */
export var userSale = userSaleURL(url);

/**
 * 
 */
export var withdraw = withdrawURL(url);


export var bankAccount = bankAccountUrl(url);

export var wallet = walletURL(url);

export var card = cardUrl(url);

export var sale = saleURL(url);

export var content = contentURL(url);

export var adminOverview = adminOverviewURL(url);