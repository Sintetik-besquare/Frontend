// calculate option pricing in Javascript
const mathjs = require("mathjs");
// function for standard normal cumulative distribution
function cdfNormal(x, mean, standardDeviation) {
  return (1 - mathjs.erf((mean - x) / (Math.sqrt(2) * standardDeviation))) / 2;
}

function bs_binary_option(St, K, sigma, delta_t, r, d, option_type) {
  var d1, d2;
  d1 =
    (1 / (sigma * Math.sqrt(delta_t))) *
    (Math.log(St / K) + (r - d + Math.pow(sigma, 2) / 2) * delta_t);
  d2 = d1 - sigma * Math.sqrt(delta_t);

  if (option_type === "call") {
    return cdfNormal(d2, 0, 1) * Math.exp(-r * delta_t);
  } else if (option_type === "put") {
    return cdfNormal(-d2, 0, 1) * Math.exp(-r * delta_t);
  } else {
    return 0;
  }
}

export default bs_binary_option;

// contract_unit_price = bs_binary_option(entry_price, entry_price, 1, (ticks / (60 * 60 * 24 * 365)), 0, 0, option_type) + 0.012;
// stake = form onChange(e)
// payout = stake / contract_unit_price;
