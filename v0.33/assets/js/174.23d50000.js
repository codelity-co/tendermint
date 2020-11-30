(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{703:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mempool-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mempool-configuration"}},[e._v("#")]),e._v(" Mempool Configuration")]),e._v(" "),a("p",[e._v("Here we describe configuration options around mempool.\nFor the purposes of this document, they are described\nas command-line flags, but they can also be passed in as\nenvironmental variables or in the config.toml file. The\nfollowing are all equivalent:")]),e._v(" "),a("p",[e._v("Flag: "),a("code",[e._v("--mempool.recheck=false")])]),e._v(" "),a("p",[e._v("Environment: "),a("code",[e._v("TM_MEMPOOL_RECHECK=false")])]),e._v(" "),a("p",[e._v("Config:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"W21lbXBvb2xdCnJlY2hlY2sgPSBmYWxzZQo="}}),e._v(" "),a("h2",{attrs:{id:"recheck"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recheck"}},[e._v("#")]),e._v(" Recheck")]),e._v(" "),a("p",[a("code",[e._v("--mempool.recheck=false")]),e._v(" (default: true)")]),e._v(" "),a("p",[e._v("Recheck determines if the mempool rechecks all pending\ntransactions after a block was committed. Once a block\nis committed, the mempool removes all valid transactions\nthat were successfully included in the block.")]),e._v(" "),a("p",[e._v("If "),a("code",[e._v("recheck")]),e._v(" is true, then it will rerun CheckTx on\nall remaining transactions with the new block state.")]),e._v(" "),a("h2",{attrs:{id:"broadcast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broadcast"}},[e._v("#")]),e._v(" Broadcast")]),e._v(" "),a("p",[a("code",[e._v("--mempool.broadcast=false")]),e._v(" (default: true)")]),e._v(" "),a("p",[e._v("Determines whether this node gossips any valid transactions\nthat arrive in mempool. Default is to gossip anything that\npasses checktx. If this is disabled, transactions are not\ngossiped, but instead stored locally and added to the next\nblock this node is the proposer.")]),e._v(" "),a("h2",{attrs:{id:"waldir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#waldir"}},[e._v("#")]),e._v(" WalDir")]),e._v(" "),a("p",[a("code",[e._v("--mempool.wal_dir=/tmp/gaia/mempool.wal")]),e._v(" (default: $TM_HOME/data/mempool.wal)")]),e._v(" "),a("p",[e._v("This defines the directory where mempool writes the write-ahead\nlogs. These files can be used to reload unbroadcasted\ntransactions if the node crashes.")]),e._v(" "),a("p",[e._v("If the directory passed in is an absolute path, the wal file is\ncreated there. If the directory is a relative path, the path is\nappended to home directory of the tendermint process to\ngenerate an absolute path to the wal directory\n(default "),a("code",[e._v("$HOME/.tendermint")]),e._v(" or set via "),a("code",[e._v("TM_HOME")]),e._v(" or "),a("code",[e._v("--home")]),e._v(")")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);