# Error handling

Во время работы с сетью могут возникнуть ошибки.

<br>


<div class="half-left">
<h3>HTTP 4xx-5xx</h3>

<li>Не делать retry клиентских ошибок</li>
<li>Не "DoS"-ить сервер</li>
<li>401, 403 — скорее всего, нужен логин</li>
<li>500 — серверу плохо</li>
</div>


<div class="half-right">
<h3>IOException</h3>

<li><code>UnknownHostException</code> — нет сети</li>
<li><code>SocketTimeoutException</code></li>
</div>
