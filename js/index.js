jQuery(function ($) {
  var contractAbi = [{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "owner","type": "address"},{"indexed": true,"internalType": "address","name": "spender","type": "address"},{"indexed": false,"internalType": "uint256","name": "value","type": "uint256"}],"name": "Approval","type": "event"},{"inputs": [{"internalType": "address","name": "spender","type": "address"},{"internalType": "uint256","name": "amount","type": "uint256"}],"name": "approve","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_referrer","type": "address"}],"name": "buy","outputs": [],"stateMutability": "payable","type": "function"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "_member","type": "address"},{"indexed": false,"internalType": "uint256","name": "_ether","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_tokens","type": "uint256"},{"indexed": false,"internalType": "address","name": "_referrer","type": "address"}],"name": "Buy","type": "event"},{"inputs": [{"internalType": "address","name": "spender","type": "address"},{"internalType": "uint256","name": "subtractedValue","type": "uint256"}],"name": "decreaseAllowance","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "spender","type": "address"},{"internalType": "uint256","name": "addedValue","type": "uint256"}],"name": "increaseAllowance","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "reinvest","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "nonpayable","type": "function"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "_member","type": "address"},{"indexed": false,"internalType": "uint256","name": "_ether","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_tokens","type": "uint256"}],"name": "Reinvest","type": "event"},{"inputs": [{"internalType": "uint256","name": "_tokens","type": "uint256"}],"name": "sell","outputs": [],"stateMutability": "nonpayable","type": "function"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "_member","type": "address"},{"indexed": false,"internalType": "uint256","name": "_ether","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_tokens","type": "uint256"}],"name": "Sell","type": "event"},{"inputs": [{"internalType": "address","name": "_recipient","type": "address"},{"internalType": "uint256","name": "_amount","type": "uint256"}],"name": "transfer","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "from","type": "address"},{"indexed": true,"internalType": "address","name": "to","type": "address"},{"indexed": false,"internalType": "uint256","name": "value","type": "uint256"}],"name": "Transfer","type": "event"},{"inputs": [{"internalType": "address","name": "_sender","type": "address"},{"internalType": "address","name": "_recipient","type": "address"},{"internalType": "uint256","name": "_amount","type": "uint256"}],"name": "transferFrom","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "withdraw","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "_member","type": "address"},{"indexed": false,"internalType": "uint256","name": "_ether","type": "uint256"}],"name": "Withdraw","type": "event"},{"stateMutability": "payable","type": "receive"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "address","name": "spender","type": "address"}],"name": "allowance","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "account","type": "address"}],"name": "balanceOf","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "buyFee","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "contractBalance","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "decimals","outputs": [{"internalType": "uint8","name": "","type": "uint8"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "dividendsPayouts","outputs": [{"internalType": "int256","name": "","type": "int256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "dividendsPerShare","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_ether","type": "uint256"}],"name": "ethToTokens","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getCurrentPrice","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "_member","type": "address"}],"name": "getDividends","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "increment","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "initialPrice","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "minPurchase","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "name","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "referralEarnings","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "referrer","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "referrerFee","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "reinvestFee","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "sellFee","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "x","type": "uint256"}],"name": "sqrt","outputs": [{"internalType": "uint256","name": "y","type": "uint256"}],"stateMutability": "pure","type": "function"},{"inputs": [],"name": "start","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "symbol","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_tokens","type": "uint256"}],"name": "tokensToEth","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalSupply","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "transferFee","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "wallet_99_strong_hand","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "withdrawFee","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"}];
  var ethPrice = $('[data-id="ethPrice"]').text();
  var metamaskWeb3, contract, account, 
  currentPrice, globalTokens, globalEth, 
  walletTokens, walletDividends, minPurchase, 
  gasPrice, strongHandAddress, walletReferralDividends,
  walletDualDividends, estimatedTokensValue, start;

  var referrer = findGetParameter('ref');

  if (referrer) {
    setCookie('ref', referrer, {secure: true, 'max-age': 3600 * 24 * 30});
  } else {
    referrer = getCookie('ref');
  }

  if (referrer) {
    $('[data-id="referrer"]').val(referrer);
  } else {  
    referrer = $('[data-id="referrer"]').val();
  }
  var contractAddress = $('[data-id="contractAddress"]').val();
  var network = $('[data-id="network"]').val();

  init()
  .catch(console.error);

  function startMetamask () {
    return new Promise (function (resolve, reject) {
      setProvider()
      .then(function () {
        if (typeof metamaskWeb3 != 'undefined') {
          setTimeout(function () {
            if (!metamaskWeb3.eth.accounts[0]) {
              return reject('Please login in Metamask');
            }
            return resolve(true);
          }, 300);
        } else {
          return reject('Metamask is not installed');
        }
      })
      .catch(function (error) {
        return reject(error);
      });
    });
  }

  async function setProvider () {
    if (window.ethereum) {
        metamaskWeb3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
        } catch (error) {
            console.error('User deny access');
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        metamaskWeb3 = new Web3(web3.currentProvider);
    }
    // Non-dapp browsers...
    else {
        console.error('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  async function init () {
    await startMetamask();
    if (metamaskWeb3.eth.accounts[0]) {
      contract = metamaskWeb3.eth.contract(contractAbi).at(contractAddress);
      account = metamaskWeb3.eth.accounts[0];
      var walletBalance = await new Promise((resolve, reject) => {
        metamaskWeb3.eth.getBalance(account, (err, res) => {
          resolve(Number(metamaskWeb3.fromWei(res, 'ether')));
        });
      });
      $('[data-id="walletAddress"]').text(shrink(account));
      $('[data-id="walletBalance"]').text(walletBalance.format(6));
      start = await new Promise((resolve, reject) => {
        contract.start((err, res) => {
          resolve(Number(res));
        });
      });
      setStart(start);
      setInterval(function () {
        setStart(start);
      }, 10000);
      $('[data-id="noweb3"]').hide();
      $('[data-id="isweb3"]').show();
      $('[data-id="refLink"]').val('https://fx99dapp.github.io/fx99.io/?ref=' + account);
      gasPrice = await new Promise((resolve, reject) => {
        metamaskWeb3.eth.getGasPrice((err, res) => {
          resolve(Number(metamaskWeb3.fromWei(res, 'gwei')));
        });
      });
      $('[data-id="gasPrice"]').text(gasPrice);
      strongHandAddress = await new Promise((resolve, reject) => {
        contract.wallet_99_strong_hand((err, res) => {
          resolve(res);
        });
      });
    }
    setTimeout(function () {
      getData()
      .catch(console.error);
    }, 100);
    setInterval(function () {
      getData()
      .catch(console.error);
    }, 5000);

    $('.messageWrapper').on('click', function () {
      $('.messageBody').html('');
      $('.messageWrapper').fadeOut(300);
    });
    $('.messageClose').on('click', function () {
      $('.messageBody').html('');
      $('.messageWrapper').fadeOut(300);
    });
    $('.messageContainer').on('click', function (e) {
      e.stopPropagation();
    });
    $('[data-show]').on('click', function () {
      $('.activeBorderA, .activeBorderB').removeClass('activeBorderA activeBorderB');
      $(this).find('.border').addClass('activeBorderA activeBorderB');
      var id = $(this).data('show');
      $('.exchange-form').hide();
      $('[data-id="' + id + '"]').show();
    });
    
    $('[data-id="buyPay"]').on('input', function () {
      var $resultElement = $('[data-id="buyGet"]');
      var amount = parseFloat($(this).val());
      if (isNaN(amount) || !(amount >= 0)) {
        $resultElement.val('');
        return;
      }
      contract.ethToTokens(metamaskWeb3.toWei(amount * 0.85, 'ether'), function (err, res) {
        if (err) {
          console.error(err);
        } else {
          res = metamaskWeb3.fromWei(res, 'ether');
          $resultElement.val(Number(res).noExponents());
        }
      });
    });
    $('[data-id="sellPay"]').on('input', function () {
      var $resultElement = $('[data-id="sellGet"]');
      var amount = parseFloat($(this).val());
      if (isNaN(amount) || !(amount >= 0)) {
        $resultElement.val('');
        return;
      }
      contract.tokensToEth(metamaskWeb3.toWei(amount, 'ether'), function (err, res) {
        if (err) {
          console.error(err);
        } else {
          res = metamaskWeb3.fromWei(res, 'ether');
          $resultElement.val((Number(res) * 0.9).format(6));
        }
      });
    });
    $('[data-id="buyButton"]').on('click', function () {
      var amount = parseFloat($('[data-id="buyPay"]').val());
      var tokens = parseFloat($('[data-id="buyGet"]').val());
      if (isNaN(amount) 
        || !minPurchase 
        || !(tokens >= minPurchase)
      ) {
        return;
      }
      contract.buy(referrer, {from: account, value: metamaskWeb3.toWei(amount, 'ether')}, function (err, res) {
        if (err) {
          console.error(err);
        } else {
          message('<a target="_blank" href="https://' 
            + (network == 'mainnet' ? '' : network + '.') 
            + 'etherscan.io/tx/' + res + '">Transaction Hash ' + res + '</a>', '.messageBuy');
        }
      });
    });
    $('[data-id="sellButton"]').on('click', function () {
      var amount = parseFloat($('[data-id="sellPay"]').val());
      if (isNaN(amount) 
        || !walletTokens 
        || !(amount <= walletTokens) 
        || !(amount >= minPurchase)
      ) {
        return;
      }
      contract.sell(metamaskWeb3.toWei(amount, 'ether'), {from: account, value: 0}, function (err, res) {
        if (err) {
          console.error(err);
        } else {
          message('<a target="_blank" href="https://' 
            + (network == 'mainnet' ? '' : network + '.') 
            + 'etherscan.io/tx/' + res + '">Transaction Hash ' + res + '</a>', '.messageSell');
        }
      });
    });
    // $('[data-id="withdrawButton"]').on('click', function () {
    //   var amount = Number($('[data-id="withdrawGet"]').val());
    //   if (!(amount > 0)) {
    //     message('Amount should be greater than 0');
    //     return false;
    //   }
    //   if (amount > walletDividends) {
    //     message('Amount can not be greater than wallet dividends. Max amount ' + walletDividends.noExponents() + ' ETH');
    //     return false;
    //   }
    //   contract.withdrawPart(metamaskWeb3.toWei(amount, 'ether'), {from: account, value: 0}, function (err, res) {
    //     if (err) {
    //       console.error(err);
    //     } else {
    //       message('<a target="_blank" href="https://' 
    //         + (network == 'mainnet' ? '' : network + '.') 
    //         + 'etherscan.io/tx/' + res + '">Transaction Hash ' + res + '</a>');
    //     }
    //   });
    // });
    $('[data-id="dualWithdrawButton"]').on('click', function () {
      contract.withdraw({from: account, value: 0}, function (err, res) {
        if (err) {
          console.error(err);
        } else {
          message('<a target="_blank" href="https://' 
            + (network == 'mainnet' ? '' : network + '.') 
            + 'etherscan.io/tx/' + res + '">Transaction Hash ' + res + '</a>', '.messageDualWithdraw');
        }
      });
    });
    $('[data-id="reinvestButton"]').on('click', function () {
      contract.reinvest({from: account, value: 0}, function (err, res) {
        if (err) {
          console.error(err);
        } else {
          message('<a target="_blank" href="https://' 
            + (network == 'mainnet' ? '' : network + '.') 
            + 'etherscan.io/tx/' + res + '">Transaction Hash ' + res + '</a>', '.messageReinvest');
        }
      });
    });
    $('[data-id="transferAmount"]').on('input', function () {
      var $resultElement = $('[data-id="transferRealAmount"]');
      var amount = parseFloat($(this).val());
      if (isNaN(amount) || !(amount >= 0)) {
        $resultElement.val('');
        return;
      }
      $resultElement.val(amount * 0.9);
    });
    $('[data-id="transferButton"]').on('click', function () {
      var address = $('[data-id="transferAddress"]').val();
      var amount = $('[data-id="transferAmount"]').val();
      if (!address 
        || isNaN(amount)
        || !(amount <= walletTokens)
        || !(amount > 0)
      ) return;

      var isValid = metamaskWeb3.isAddress(address);

      if (!isValid) {
        message('Address is invalid', '.messageTransfer');
        return;
      }

      contract
      .transfer(address, 
        metamaskWeb3.toWei(amount, 'ether'), 
        {from: account, value: 0}, 
        function (err, res) {
          if (err) {
            console.error(err);
          } else {
            message('<a target="_blank" href="https://' 
              + (network == 'mainnet' ? '' : network + '.') 
              + 'etherscan.io/tx/' + res + '">Transaction Hash ' + res + '</a>', '.messageTransfer');
          }
        }
      );
    });
    $('.copy').on('click', function () {
      var $el = $(this).parent().find('input');
      if (!$el.val()) return;
      try {
        var success = Clipboard.copy($el.val());
        if (success) {
          message($el.data('message'), '.messageLink');
        }
      } catch (err) {
        console.error(err);
      }
    });
  }

  async function getData () {
    if (!contract
        || !metamaskWeb3) return;
    if (account
      && account != metamaskWeb3.eth.accounts[0]) location.reload(false);
    currentPrice = await new Promise(function(resolve, reject) {
      contract.getCurrentPrice(function (err, res) {
        if (err) {
          reject(err);
        } else {
          res = metamaskWeb3.fromWei(res, 'ether');
          resolve(res);
        }
      });
    });

    $('[data-id="buyPriceEth"]').text((Number(currentPrice) / 0.85).format(10));
    $('[data-id="buyPriceUsd"]').text((Number(currentPrice) / 0.85 * ethPrice).format(8));
    $('[data-id="sellPriceEth"]').text((Number(currentPrice) * 0.9).format(10));
    $('[data-id="sellPriceUsd"]').text((Number(currentPrice) * 0.9 * ethPrice).format(8));
    globalEth = await new Promise(function(resolve, reject) {
      metamaskWeb3.eth.getBalance(contractAddress, function (err, res) {
        if (err) {
          reject(err);
        } else {
          res = metamaskWeb3.fromWei(res, 'ether');
          resolve(res);
        }
      });
    });
    $('[data-id="globalEth"]').text(Number(globalEth).format(6));
    $('[data-id="globalUsd"]').text((globalEth * ethPrice).format(2));
    globalTokens = await new Promise(function(resolve, reject) {
      contract.totalSupply(function (err, res) {
        if (err) {
          reject(err);
        } else {
          res = metamaskWeb3.fromWei(res, 'ether');
          resolve(Number(res));
        }
      });
    });
    $('[data-id="globalTokens"]').text(Number(globalTokens).format(6));
    walletTokens = await new Promise(function(resolve, reject) {
      contract.balanceOf(account, function (err, res) {
        if (err) {
          reject(err);
        } else {
          res = metamaskWeb3.fromWei(res, 'ether');
          resolve(Number(res));
        }
      });
    });
    // if (walletTokens >= 99) {
    //   $('[data-id="refLinkContainer"]').show();
    // } else {
    //   $('[data-id="refLinkContainer"]').hide();
    // }
    $('[data-id="walletTokens"]').text(walletTokens.format(6));
    estimatedTokensValue = await new Promise(function(resolve, reject) {
      contract.tokensToEth(metamaskWeb3.toWei(walletTokens, 'ether'), function (err, res) {
        if (err) {
          reject(err);
        } else {
          res = metamaskWeb3.fromWei(res, 'ether');
          resolve(Number(res));
        }
      });
    });
    estimatedTokensValue *= 0.9;
    $('[data-id="estimatedTokensValue"]').text(estimatedTokensValue.format(6));
    walletDividends = await new Promise(function(resolve, reject) {
      contract.getDividends(account, function (err, res) {
        if (err) {
          reject(err);
        } else {
          res = metamaskWeb3.fromWei(res, 'ether');
          resolve(Number(res));
        }
      });
    });
    $('[data-id="walletDividends"]').text(walletDividends.format(6));
    walletReferralDividends = await new Promise(function(resolve, reject) {
      contract.referralEarnings(account, function (err, res) {
        if (err) {
          reject(err);
        } else {
          res = metamaskWeb3.fromWei(res, 'ether');
          resolve(Number(res));
        }
      });
    });
    $('[data-id="walletReferralDividends"]').text(walletReferralDividends.format(6));
    walletDualDividends = walletDividends + walletReferralDividends;    
    $('[data-id="reinvestGet"]').val(walletDualDividends.format(6));
    $('[data-id="walletDualDividends"]').text(walletDualDividends.format(6));
    $('[data-id="dualWithdrawGet"]').val(walletDualDividends.format(6));
    minPurchase = await new Promise(function(resolve, reject) {
      contract.minPurchase(function (err, res) {
        if (err) {
          reject(err);
        } else {
          res = metamaskWeb3.fromWei(res, 'ether');
          resolve(res);
        }
      });
    });
    var strongHandBalance = await new Promise((resolve, reject) => {
      metamaskWeb3.eth.getBalance(strongHandAddress, (err, res) => {
        resolve(Number(metamaskWeb3.fromWei(res, 'ether')));
      });
    });
    $('[data-id="strongEth"]').text(strongHandBalance.format(6));
    $('[data-id="strongUsd"]').text((strongHandBalance * ethPrice).format(2));
  }

  function message (html, selector) {
    $('.messageBody')
    .not(selector)
    .find('div')
    .stop()
    .fadeOut(300, function () {
      $(this).html('');
    });

    $(selector + ' > div')
    .html(html)
    .stop()
    .fadeIn(300);

    setTimeout(function () {
      $(selector + ' > div')
      .stop()
      .fadeOut(300, function () {
        $(this).html('');
      });      
    }, 3000);
  }

  function setStart (start) {
    var time = Math.floor(Date.now() / 1000);
    var str = '';
    time -= start;
    var months = Math.floor(time / (3600 * 24 * 30));
    if (months > 0) {
      if (months > 1) {
        str += months + ' months ';
      } else {
        str += months + ' month ';
      }
      time -= months * (3600 * 24 * 30);
    }
    var days = Math.floor(time / (3600 * 24));
    if (days > 0) {
      if (days > 1) {
        str += days + ' days ';
      } else {
        str += days + ' day ';
      }
      time -= days * (3600 * 24);
    }
    var hours = Math.floor(time / (3600));
    if (hours > 0) {
      if (hours > 1) {
        str += hours + ' hours ';
      } else {
        str += hours + ' hour ';
      }
      time -= hours * (3600);
    }
    var minutes = Math.floor(time / (60));
    if (minutes > 1) {
      str += minutes + ' minutes ';
    } else {
      str += minutes + ' minute ';
    }
    $('[data-id="start"]').text(str);
  }

  function shrink (str) {
    if (str.length < 12) return str;
    return str.slice(0,4) + '......' + str.slice(-4);
  }

  $('.lang > a').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('.dropDown').toggleClass('open');
  });

  $('body').on('click', function () {
    $('.dropDown').removeClass('open');
  });

  $('.dropDown').on('click', function (e) {
    e.stopPropagation();
  });
});

window.Clipboard = (function(window, document, navigator) {
    var textArea,
        copy;

    function isOS() {
        return navigator.userAgent.match(/ipad|iphone/i);
    }

    function createTextArea(text) {
        textArea = document.createElement('textArea');
        textArea.value = text;
        document.body.appendChild(textArea);
    }

    function selectText() {
        var range,
            selection;

        if (isOS()) {
            range = document.createRange();
            range.selectNodeContents(textArea);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, 999999);
        } else {
            textArea.select();
        }
    }

    function copyToClipboard() {        
        var success = document.execCommand('copy');
        document.body.removeChild(textArea);
        return success;
    }

    copy = function(text) {
        createTextArea(text);
        selectText();
        return copyToClipboard();
    };

    return {
        copy: copy
    };
})(window, document, navigator);

Number.prototype.noExponents = function ()
{
    var data= String(this).split(/[eE]/);
    if(data.length== 1) return data[0]; 

    var  z= '', sign= this<0? '-':'',
    str= data[0].replace('.', ''),
    mag= Number(data[1])+ 1;

    if(mag<0){
        z= sign + '0.';
        while(mag++) z += '0';
        return z + str.replace(/^\-/,'');
    }
    mag -= str.length;  
    while(mag--) z += '0';
    return str + z;
}

Number.prototype.format = function (n)
{
  if (this == 0) return '0';
  var string = this.toFixed(n + 10).slice(0,-10);
  return string;
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}
//setCookie('user', 'John', {secure: true, 'max-age': 3600});
function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}
