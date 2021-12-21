# Troubleshooting

We are running to CORS issues. As We send query from local http to protected https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest we recieve error.

There are several ways to fix/workaround this.

- Turn off CORS. For example: https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome

- Use a plugin for your browser https://chrome.google.com/webstore/detail/
 for chrome is
moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc#:~:text=Moesif%20Origin%20%26%20CORS%20Changer&text=This%20plugin%20allows%20you%20to%20send%20cross%2Ddomain%20requests.&text=This%20plugin%20allows%20you%20to%20send%20cross%2Ddomain%20requests%20directly,without%20receiving%20Cross%20Origin%20Errors.


- Use a proxy such as nginx. http://oskarhane.com/avoid-cors-with-nginx-proxy_pass/
