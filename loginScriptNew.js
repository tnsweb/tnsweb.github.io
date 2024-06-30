document.getElementById("login-btn").addEventListener("click", login)



function SHA512(str) {
	/*
	* Secure Hash Algorithm (SHA512)
	* http://www.happycode.info/
	*/
	function int64(msint_32, lsint_32) {
		this.highOrder = msint_32;
		this.lowOrder = lsint_32;
	}

	var H = [new int64(0x6a09e667, 0xf3bcc908), new int64(0xbb67ae85, 0x84caa73b),
	new int64(0x3c6ef372, 0xfe94f82b), new int64(0xa54ff53a, 0x5f1d36f1),
	new int64(0x510e527f, 0xade682d1), new int64(0x9b05688c, 0x2b3e6c1f),
	new int64(0x1f83d9ab, 0xfb41bd6b), new int64(0x5be0cd19, 0x137e2179)];

	var K = [new int64(0x428a2f98, 0xd728ae22), new int64(0x71374491, 0x23ef65cd),
	new int64(0xb5c0fbcf, 0xec4d3b2f), new int64(0xe9b5dba5, 0x8189dbbc),
	new int64(0x3956c25b, 0xf348b538), new int64(0x59f111f1, 0xb605d019),
	new int64(0x923f82a4, 0xaf194f9b), new int64(0xab1c5ed5, 0xda6d8118),
	new int64(0xd807aa98, 0xa3030242), new int64(0x12835b01, 0x45706fbe),
	new int64(0x243185be, 0x4ee4b28c), new int64(0x550c7dc3, 0xd5ffb4e2),
	new int64(0x72be5d74, 0xf27b896f), new int64(0x80deb1fe, 0x3b1696b1),
	new int64(0x9bdc06a7, 0x25c71235), new int64(0xc19bf174, 0xcf692694),
	new int64(0xe49b69c1, 0x9ef14ad2), new int64(0xefbe4786, 0x384f25e3),
	new int64(0x0fc19dc6, 0x8b8cd5b5), new int64(0x240ca1cc, 0x77ac9c65),
	new int64(0x2de92c6f, 0x592b0275), new int64(0x4a7484aa, 0x6ea6e483),
	new int64(0x5cb0a9dc, 0xbd41fbd4), new int64(0x76f988da, 0x831153b5),
	new int64(0x983e5152, 0xee66dfab), new int64(0xa831c66d, 0x2db43210),
	new int64(0xb00327c8, 0x98fb213f), new int64(0xbf597fc7, 0xbeef0ee4),
	new int64(0xc6e00bf3, 0x3da88fc2), new int64(0xd5a79147, 0x930aa725),
	new int64(0x06ca6351, 0xe003826f), new int64(0x14292967, 0x0a0e6e70),
	new int64(0x27b70a85, 0x46d22ffc), new int64(0x2e1b2138, 0x5c26c926),
	new int64(0x4d2c6dfc, 0x5ac42aed), new int64(0x53380d13, 0x9d95b3df),
	new int64(0x650a7354, 0x8baf63de), new int64(0x766a0abb, 0x3c77b2a8),
	new int64(0x81c2c92e, 0x47edaee6), new int64(0x92722c85, 0x1482353b),
	new int64(0xa2bfe8a1, 0x4cf10364), new int64(0xa81a664b, 0xbc423001),
	new int64(0xc24b8b70, 0xd0f89791), new int64(0xc76c51a3, 0x0654be30),
	new int64(0xd192e819, 0xd6ef5218), new int64(0xd6990624, 0x5565a910),
	new int64(0xf40e3585, 0x5771202a), new int64(0x106aa070, 0x32bbd1b8),
	new int64(0x19a4c116, 0xb8d2d0c8), new int64(0x1e376c08, 0x5141ab53),
	new int64(0x2748774c, 0xdf8eeb99), new int64(0x34b0bcb5, 0xe19b48a8),
	new int64(0x391c0cb3, 0xc5c95a63), new int64(0x4ed8aa4a, 0xe3418acb),
	new int64(0x5b9cca4f, 0x7763e373), new int64(0x682e6ff3, 0xd6b2b8a3),
	new int64(0x748f82ee, 0x5defb2fc), new int64(0x78a5636f, 0x43172f60),
	new int64(0x84c87814, 0xa1f0ab72), new int64(0x8cc70208, 0x1a6439ec),
	new int64(0x90befffa, 0x23631e28), new int64(0xa4506ceb, 0xde82bde9),
	new int64(0xbef9a3f7, 0xb2c67915), new int64(0xc67178f2, 0xe372532b),
	new int64(0xca273ece, 0xea26619c), new int64(0xd186b8c7, 0x21c0c207),
	new int64(0xeada7dd6, 0xcde0eb1e), new int64(0xf57d4f7f, 0xee6ed178),
	new int64(0x06f067aa, 0x72176fba), new int64(0x0a637dc5, 0xa2c898a6),
	new int64(0x113f9804, 0xbef90dae), new int64(0x1b710b35, 0x131c471b),
	new int64(0x28db77f5, 0x23047d84), new int64(0x32caab7b, 0x40c72493),
	new int64(0x3c9ebe0a, 0x15c9bebc), new int64(0x431d67c4, 0x9c100d4c),
	new int64(0x4cc5d4be, 0xcb3e42b6), new int64(0x597f299c, 0xfc657e2a),
	new int64(0x5fcb6fab, 0x3ad6faec), new int64(0x6c44198c, 0x4a475817)];

	var W = new Array(64);
	var a, b, c, d, e, f, g, h, i, j;
	var T1, T2;
	var charsize = 8;

	function utf8_encode(str) {
		return unescape(encodeURIComponent(str));
	}

	function str2binb(str) {
		var bin = [];
		var mask = (1 << charsize) - 1;
		var len = str.length * charsize;

		for (var i = 0; i < len; i += charsize) {
			bin[i >> 5] |= (str.charCodeAt(i / charsize) & mask) << (32 - charsize - (i % 32));
		}

		return bin;
	}

	function binb2hex(binarray) {
		var hex_tab = '0123456789abcdef';
		var str = '';
		var length = binarray.length * 4;
		var srcByte;

		for (var i = 0; i < length; i += 1) {
			srcByte = binarray[i >> 2] >> ((3 - (i % 4)) * 8);
			str += hex_tab.charAt((srcByte >> 4) & 0xF) + hex_tab.charAt(srcByte & 0xF);
		}

		return str;
	}

	function safe_add_2(x, y) {
		var lsw, msw, lowOrder, highOrder;

		lsw = (x.lowOrder & 0xFFFF) + (y.lowOrder & 0xFFFF);
		msw = (x.lowOrder >>> 16) + (y.lowOrder >>> 16) + (lsw >>> 16);
		lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

		lsw = (x.highOrder & 0xFFFF) + (y.highOrder & 0xFFFF) + (msw >>> 16);
		msw = (x.highOrder >>> 16) + (y.highOrder >>> 16) + (lsw >>> 16);
		highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

		return new int64(highOrder, lowOrder);
	}

	function safe_add_4(a, b, c, d) {
		var lsw, msw, lowOrder, highOrder;

		lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) + (c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF);
		msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (lsw >>> 16);
		lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

		lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) + (c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) + (msw >>> 16);
		msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (d.highOrder >>> 16) + (lsw >>> 16);
		highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

		return new int64(highOrder, lowOrder);
	}

	function safe_add_5(a, b, c, d, e) {
		var lsw, msw, lowOrder, highOrder;

		lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) + (c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF) + (e.lowOrder & 0xFFFF);
		msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (e.lowOrder >>> 16) + (lsw >>> 16);
		lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

		lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) + (c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) + (e.highOrder & 0xFFFF) + (msw >>> 16);
		msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (d.highOrder >>> 16) + (e.highOrder >>> 16) + (lsw >>> 16);
		highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

		return new int64(highOrder, lowOrder);
	}

	function maj(x, y, z) {
		return new int64(
			(x.highOrder & y.highOrder) ^ (x.highOrder & z.highOrder) ^ (y.highOrder & z.highOrder),
			(x.lowOrder & y.lowOrder) ^ (x.lowOrder & z.lowOrder) ^ (y.lowOrder & z.lowOrder)
		);
	}

	function ch(x, y, z) {
		return new int64(
			(x.highOrder & y.highOrder) ^ (~x.highOrder & z.highOrder),
			(x.lowOrder & y.lowOrder) ^ (~x.lowOrder & z.lowOrder)
		);
	}

	function rotr(x, n) {
		if (n <= 32) {
			return new int64(
				(x.highOrder >>> n) | (x.lowOrder << (32 - n)),
				(x.lowOrder >>> n) | (x.highOrder << (32 - n))
			);
		} else {
			return new int64(
				(x.lowOrder >>> n) | (x.highOrder << (32 - n)),
				(x.highOrder >>> n) | (x.lowOrder << (32 - n))
			);
		}
	}

	function sigma0(x) {
		var rotr28 = rotr(x, 28);
		var rotr34 = rotr(x, 34);
		var rotr39 = rotr(x, 39);

		return new int64(
			rotr28.highOrder ^ rotr34.highOrder ^ rotr39.highOrder,
			rotr28.lowOrder ^ rotr34.lowOrder ^ rotr39.lowOrder
		);
	}

	function sigma1(x) {
		var rotr14 = rotr(x, 14);
		var rotr18 = rotr(x, 18);
		var rotr41 = rotr(x, 41);

		return new int64(
			rotr14.highOrder ^ rotr18.highOrder ^ rotr41.highOrder,
			rotr14.lowOrder ^ rotr18.lowOrder ^ rotr41.lowOrder
		);
	}

	function gamma0(x) {
		var rotr1 = rotr(x, 1), rotr8 = rotr(x, 8), shr7 = shr(x, 7);

		return new int64(
			rotr1.highOrder ^ rotr8.highOrder ^ shr7.highOrder,
			rotr1.lowOrder ^ rotr8.lowOrder ^ shr7.lowOrder
		);
	}

	function gamma1(x) {
		var rotr19 = rotr(x, 19);
		var rotr61 = rotr(x, 61);
		var shr6 = shr(x, 6);

		return new int64(
			rotr19.highOrder ^ rotr61.highOrder ^ shr6.highOrder,
			rotr19.lowOrder ^ rotr61.lowOrder ^ shr6.lowOrder
		);
	}

	function shr(x, n) {
		if (n <= 32) {
			return new int64(
				x.highOrder >>> n,
				x.lowOrder >>> n | (x.highOrder << (32 - n))
			);
		} else {
			return new int64(
				0,
				x.highOrder << (32 - n)
			);
		}
	}

	str = utf8_encode(str);
	strlen = str.length * charsize;
	str = str2binb(str);

	str[strlen >> 5] |= 0x80 << (24 - strlen % 32);
	str[(((strlen + 128) >> 10) << 5) + 31] = strlen;

	for (var i = 0; i < str.length; i += 32) {
		a = H[0];
		b = H[1];
		c = H[2];
		d = H[3];
		e = H[4];
		f = H[5];
		g = H[6];
		h = H[7];

		for (var j = 0; j < 80; j++) {
			if (j < 16) {
				W[j] = new int64(str[j * 2 + i], str[j * 2 + i + 1]);
			} else {
				W[j] = safe_add_4(gamma1(W[j - 2]), W[j - 7], gamma0(W[j - 15]), W[j - 16]);
			}

			T1 = safe_add_5(h, sigma1(e), ch(e, f, g), K[j], W[j]);
			T2 = safe_add_2(sigma0(a), maj(a, b, c));
			h = g;
			g = f;
			f = e;
			e = safe_add_2(d, T1);
			d = c;
			c = b;
			b = a;
			a = safe_add_2(T1, T2);
		}

		H[0] = safe_add_2(a, H[0]);
		H[1] = safe_add_2(b, H[1]);
		H[2] = safe_add_2(c, H[2]);
		H[3] = safe_add_2(d, H[3]);
		H[4] = safe_add_2(e, H[4]);
		H[5] = safe_add_2(f, H[5]);
		H[6] = safe_add_2(g, H[6]);
		H[7] = safe_add_2(h, H[7]);
	}

	var binarray = [];
	for (var i = 0; i < H.length; i++) {
		binarray.push(H[i].highOrder);
		binarray.push(H[i].lowOrder);
	}
	return binb2hex(binarray);
}

let website_version = "1.4.3.1"





function setLSVars(userName, userClass, userMFC, amec, ntsad=null, next="/") {
	console.log(userName)
	localStorage.setItem("local-user-name", userName)
	localStorage.setItem("local-gep", userClass)
	localStorage.setItem("local-mfc", userMFC)
	if (amec == true) localStorage.setItem("amec", "amec")
	localStorage.setItem("ntsad", ntsad)
	localStorage.setItem("w_ver", website_version)
	location.replace(next || (localStorage.getItem("redirect-to")) || "/")
}

const LS_ACCOUNTS_V2_KEYS = Object.freeze({
	userObj: "accounts-v2-userObj",
	wVer: "accounts-v2-webVerAtTimeOfLogin"
});
function setLSVars_v2(userObj) {
	let stringified = JSON.stringify(userObj);
	let reparsed = JSON.parse(stringified);
	console.log(reparsed);
	localStorage.setItem(LS_ACCOUNTS_V2_KEYS.userObj, stringified);
	localStorage.setItem(LS_ACCOUNTS_V2_KEYS.wVer, website_version);
}

let classes = {
	GEP: {
		"5-1": {
			name: "6-1",
			mixedFC: ["5I", "5J"],
			mainstreamEquiv: "5-3",
			type: "ms"
		},
		"5-3": {
			name: "6-3",
			mixedFC: ["5I", "5J"],
			mainstreamEquiv: "5-1"
		},
		"5-4": {
			name: "6-4",
			mixedFC: ["5K", "5L"],
			mainstreamEquiv: "5-2"
		}
	},
	mixedFC: {
		"5I": {
			name: "6I",
			mainstreamEquiv: "5-1",
			GEPequiv: "5-3"
		},
		"5J": {
			name: "6J",
			mainstreamEquiv: "5-1",
			GEPequiv: "5-3"
		},
		"5K": {
			name: "6K",
			mainstreamEquiv: "5-2",
			GEPequiv: "5-4"
		},
		"5L": {
			name: "6L",
			mainstreamEquiv: "5-2",
			GEPequiv: "5-4"
		}
	},
	"unknown": {
		name: "unknown"
	}
}
let GEPkeys = Object.keys(classes.GEP)
let obj
for (i = 0; i < GEPkeys.length; i++) {
	obj = classes.GEP[GEPkeys[i]].mixedFC
	for (j = 0; j < obj.length; j++) {
		classes.GEP[GEPkeys[i]].mixedFC[j] = classes.mixedFC[obj[j]]
	}

}

/*User template:
name: "name",
username: ..,
password: "hashed password",
GEPclass: classes.GEP["class-here"],
mixedFC: classes.mixedFC["classhere"],
AMEC: bool,
replit: replit username
ntsad: "project name"*/

// Hasher: https://emn178.github.io/online-tools/sha512.html
let users = [
	{
		name: "Jun Ying",
		username: "5-Xweb2023-jun-ying",
		password: "1ad826d46f0cc48947afcd6310290c6eee25135b4e7f39224f59d5a5ee1de520ecdc940f8ab7e4e0a224d946e9a94d1aeb585144b3a365ec5125bd96034ab9d9",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5J"],
		AMEC: true,
		replit: "gohjy",
		ntsad: "digicard",
		tnst: "auth"
	},
	{
		name: "Sophie",
		username: "5-Xweb2023-sophie",
		password: "3b50b1d2cb2f360b516a2670303716ed3b487fa80b5d770c907122b3f05cca60ff631531e2fffcef1ae7c8f224f3625252f53da69d3ecad646998aa739630460",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5I"]
	},
	{
		name: "Wayne",
		username: "5-Xweb2023-wayne",
		password: "81b0a80648bb297563a5f6bd3ce81d4e1502ca30f7a2946aca78c1d21c95ed34197968a5ad45354ab728d9da989c02869d6172e2a63586dfc730ff3a26e5c9be",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5J"],
		ntsad: "digicard"
	},
	{
		name: "Brett",
		username: "5-Xweb2023-brett",
		password: "7eeb2f2a1db688e42667cc6e45b666566c02a11d8e503d0aa4a918253abf8b95c09a27e4853a6899536ba915509e0742e9ff3eef6ab64305c1b8caa802a501f8",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5I"],
		replit: "CarbonBQ"
	},
	{
		name: "Kayle",
		username: "5-Xweb2023-kayle",
		password: "b28f5c10fd3eaa454890ceedea9b5a86d4b7a07ff4595d385cf913afd64a7882eb00c83be3ff785641eeee9d1cd8b086114a7ff1c0dfdf03cb26a159c0893dec",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5J"],
		replit: "ZhuHairui"
	},
	{
		name: "Sarah",
		username: "5-Xweb2023-sarah",
		password: "243ccdf772414762befacdfffddb8ecb8101efd1d865fe9b8614c99f1818e6601cb440aa7e5a6570585f595439acc4829ce2231da495e939056dfd4fa25a482f",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5I"]
	},
	{
		name: "Richelle",
		username: "5-Xweb2023-richelle",
		password: "4aa41f414ea4890d38dd875a8c568b7094a01f6d4bf2161481491b9db5747e9f4f43348f3b0c4b751083e1fefea639ea800e17a426c9a701a2f4c74744958043",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5J"]
	},
	{
		name: "Xander",
		username: "5-Xweb2023-xander",
		password: "3611c783e3d635b260154562c06865e20091eb7bc6a6d9c3062d6251922f03db727016e1da6c4f84035e55cabd92d5eac53419b920e687b4c6505b06bd028f3e",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5I"],
		replit: "XanTKH"
	},
	{
		name: "Muen",
		username: "5-Xweb2023-muen",
		password: "fab94e645749af7ef33b34af7c09c2c8b0efb64f3084222b78feaf3e38247810d73d2c715318a8c35bdf476c9c3346484a2406bade39d38da6510047072f0d45",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5I"]
	},
	{
		name: "Xinye",
		username: "5-Xweb2023-xinye",
		password: "e9b434cb8913cd89510086a2c11bfa25a25ae7ccfd89139b58593213ef0d39297c5c0f029cc23351a033c7900c8da019a614d536c2dae470ad0b9f5c0764f1f1",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5I"]
	},
	{
		name: "Aidan",
		username: "5-Xweb2023-aidan",
		password: "a42cd8475ff7a3ecc8e5773a6cfab4a37ef8eb7b3662d8a73b13ad2aadfd78801e7dccdaa654bc985ec23603f07fbfc3f40f5e946b5be60c14738ceb5af2807e",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5I"],
		AMEC: true
	},
	{
		name: "Xinyuan",
		username: "lixinyuan",
		password: "51dc1439688c65d6c0dbae37944f7322a86c3654170f92a79eed0e91ec98b5e3e1e3b0fe6af06acc898b7b87a86fc89edb115c07555771875e5a15a13de2ed81",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5I"],
		AMEC: true,
		ntsad: "digicard",
		tnst: "auth"
	},
	{
		name: "Ian",
		username: "5-Xweb2023-ian",
		password: "3a5a61a840e673165626c5a81d8070bcc7c131d2637a2c3c2c224450bb17a1270104372fd37b12aebebac78801c24586b3e936a1d620f12676484435c97a2b01",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5I"],
		ntsad: "digicard"
	},
	{
		name: "Zihan",
		username: "5-Xweb2023-zihan",
		password: "69bf5c6533f5c4c92b7972b77c368a0b1ef79c1c6d43c3a0b4bf6bd5b722c60723d5f64825b94e9f72e221a699d4ab96ffa2167821ede9db7a8f43e23a25afd5",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5I"],
		ntsad: "digicard"
	},
	{
		name: "Yi Qun",
		username: "5-Xweb2023-yi-qun",
		password: "5e2e2c9cba7fe6ab35c09fd627117db81d8897ce00f7e66719b23c774ce456ff8a6b486440ef02aadc4e0e00ed34f24fb85e9c0fd7a1769809813bdeaf325d41",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5I"]
	},
	{
		name: "Jingxuan",
		username: "5-Xweb2023-jingxuan",
		password: "8173f5576b726bcba369b1ef6e7b87a2cb29875536632a196ea571c89cb74b97714829eb08d23a30a552fdc5594552a23e23f7832faa06ff358fdec0a33eafa5",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5I"],
		AMEC: true
	},
	{
		name: "Amanda",
		username: "5-Xweb2023-amanda",
		password: "cd639f5ecf3514ccc33b9985b55a118727a21782c04a714ab6a7634be91dc4b6e8bff6456b546e382ef00057550952f019993bbe6b8d84fe09c2b961149bfa2a",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5I"]
	},
	{
		name: "Jia En",
		username: "5-Xweb2023-jia-en",
		password: "19d4462dde45a3d548c186c330a4830572c0459224ec1e6196f735669ecf2c38a262e985ac335b9d22def1f6e6999cc2ab3010839a4c78b6817f21f362119ec2",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5I"]
	},

	{
		name: "Yunxi",
		username: "5-Xweb2023-yunxi",
		password: "d2922f9d385fd68aee245a83e23b99cf36438f426a42b4cb14f3a35f1a264d791571dfa0f267ba6ab3b324cc5ebd0d41b0cb4b5c830b551964fa61bf000a6523",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5J"],
		AMEC: true
	},
	{
		name: "Xinrun",
		username: "5-Xweb2023-xinrun",
		password: "652f415922682a691278ea00836454052e02e4de7c0993171e94db67a9630384bc4bf5f8912fc2e65de9251da675e3dd8afaecc49ca62ed5424238f0e3c74a34",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5J"],
		AMEC: true
	},
	{
		name: "Nicole",
		username: "5-Xweb2023-nicole",
		password: "9d9fc5b668518fec21db2c4625092634d9e20bf8c620a080a973bb2ad07aeeee827afb8b6a94d4542614503ae9fd0ef3c0c48e6d349b74eba560780729c1e060",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5J"]
	},
	{
		name: "Mingze",
		username: "5-Xweb2023-mingze",
		password: "f0c8b205287a22306f7725c132c9023f7156e4181a0b0b2c5873d04a4a5c93f49eb312c49f72a375db2b656b585e2b30a3e9767518ae94cd09f879c0d5764360",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5J"]
	},
	{
		name: "Haoran",
		username: "5-Xweb2023-haoran",
		password: "c3c550be81fd80c6672a61c50c90989104002e652b59de15379ccea3db37d1d02a7fe66fcb0c2148854f333244d8fe463184ade0615d32ca0086681d97ea4886",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5J"],
		ntsad: "digicard"
	},
	{
		name: "Jaycus",
		username: "5-Xweb2023-jaycus",
		password: "a66bfd9e53c7918d89aeaa9769f2e623c73e33412e0b77dd3baf324ad0af7bff78263b07fe194a8edf738debb3e53163171b64a2a99f617778b3cf195621d5b5",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5J"]
	},
	{
		name: "Chenye",
		username: "5-Xweb2023-chenye",
		password: "c0ad4e117836c04b9fb76313d35dff7ea2252c811f3b6fea3ead8c3d0878a16105e80168f479d76154c161a19e11d8049dbc3d07f98f30853b8ca9b5bb92ea44",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5J"]
	},
	{
		name: "Zechen",
		username: "5-Xweb2023-zechen",
		password: "ac45c48b64b526b9c215e9b6d73a2f1ebe05b5bda7f1724b0791a0eda037f6a20d295ce6aa1d9b69be56b90b569289a247e35fdc29e1e1f3b56e463da210647c",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5J"]
	},
	{
		name: "Kye",
		username: "5-Xweb2023-kye",
		password: "440ab8e5af8ab00c6fb7e152b4a77d449fc4eb406785a3d8163f60a9dc93a14adb6a90305471b04929100d5ef3b38d71e821a0a1a284f8458ed99d94e960ace3",
		GEPclass: classes.GEP["5-3"],
		mixedFC: classes.mixedFC["5J"],
		AMEC: true
	},
	{
		name: "Andre",
		username: "andre#Taonan2023",
		password: "2c09271f4aa7123b63f47fc952bf219363f8d1afbfcbcb1ff55ea761dfd83dfc5762e736219c94d8d2bf492a3eee1c9e5ba6c91aaabc06bb197843756ae2a8bb",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.mixedFC["5L"],
		tnst: "auth"
	},
	{
		name: "Faith",
		username: "faith2023",
		password: "0c3d69053a4bd6c8234917702b2a800e9d3b38633f3a134cc75176ddc615433ab5b925f2e7d387dafbed6f2f086ee7e8c082e7540f1f685ff2c77e0f02b5e58d",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.mixedFC["5L"]
	},
	{
		name: "Ethan",
		username: "5-Xweb2023-ethan",
		password: "decdc16429a83e06441250d47afc9a07c76d1e44860835ab9b060d1a4ff9ea204aa632ef20ea5c583195d6479fd5a91cb5db76412cb22c54709e183f8699a836",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	/*{
		name: "",
		username: "5-Xweb2023-",
		password: "",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},*/
	{
		name: "Jiyang",
		username: "5-Xweb2023-jiyang",
		password: "d1fe2411105ebfb624a8e81ec8d5361303458523803f93df5bfd9ecd57a93dca3a43c0b3daa1ea318d5aaf4590c29015b6c03749d0aedc574aec90cd3fefc2c1",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Kun Lin",
		username: "5-Xweb2023-kun-lin",
		password: "kunlin",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Stefanie",
		username: "5-Xweb2023-stefanie",
		password: "77cada1dc216f3c3ec39b7acc06aae6776895fd6291663291ea05c114c7312768147882ab8853b8cb13d2668c829ee20c544d529ebbd9a5de8dc5b55ac018712",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Kevin",
		username: "5-Xweb2023-kevin",
		password: "5dfe55879638e99cc14a1d4730238936207b92050ef3cd24ae64d52d773084485b55b00f835a076bdc8f8c307ab5eb183eaf332867a2b6f47557d913234f2973",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Zhiyan",
		username: "5-Xweb2023-zhiyan",
		password: "8ba018fa41cdd8697da85d04d356fd8b0c7ef43bea0f5d748d8ec5b378cf2e53c94c04c16c2d583f3d28d6452b7cd4c742fbda26c32efe166919d1bef0490187",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.mixedFC["5K"]
	},
	{
		name: "Zheng Xian",
		username: "5-Xweb2023-zheng-xian",
		password: "4e3d1e4ee8d3504c1f40751c3add9e6ff70db8aee5ccc684541dc7d53c0a2dc119c5b464e33cd613e115b78abfe3427d25b957dc1cb6dde3d1c82b30f2330421",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Yin Hyang",
		username: "5-Xweb2023-yin-hyang",
		password: "5d8fc0ab4d949eae612a828bd66bc6184adc4c94c3f4f6aedb61f3555ad49eaaeaf28bbaa0608d73a8024792a6e42079d9739d6f8e3e66cd4168f8843a17af98",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.mixedFC["5L"]
	},
	{
		name: "Sean",
		username: "5-Xweb2023-sean",
		password: "d1e72debd219906b7c4b7b96c2645a71929d1705d3c6f209b56bf145bdba5e9af605dd2a0646d70f62b3834cc4398d9c7ea8aa17a10afdae912b86c3f92169b7",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Charlotte",
		username: "5-Xweb2023-charlotte",
		password: "9bc50bac833de0a9212555e54a16d6f1438fada4a6e2d769d9e1d58982fea2fc87840f9d7539d6cb7a0b46a86bd6eec571ae51f31056f31f98a291eb85fe0377",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Jerome",
		username: "5-Xweb2023-jerome",
		password: "7ef6d7c225edda57aa6aef8c3ebf70b7b7822a9d9d18060b326985b0b64f26bd082e9529c5dd2fadc17fd98bf82662293f8d35dd78dbc53d07a213badf1ccf8f",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Hoe Teng",
		username: "5-Xweb2023-hoe-teng",
		password: "375c24bbe902e34dbae0a51dfdfb78bb18ddefb5fe30e8460bb0da0987c2c8fbcda10cddf89bd1b83c321666758a18cb3f633417076c9e096a89f3f3e3b43776",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Yifan",
		username: "5-Xweb2023-yifan",
		password: "ccb9257c5a9a3ec567e3964eb6c7f0f24a541ee49b882e2bee6345babebadd70235413b6673e784a98c3116f3a79efdce7d62a31f61bbbc1542a0e265ef8bc38",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Yi Xin",
		username: "5-Xweb2023-yi-xin",
		password: "08112b7c40b50baed9bf1e471c02b8380806afc0827427a138bff54313d6eec63dc614cc9218d6d5a79b84db19ce70a3f13dd919c65c6b6a320c987e71428a12",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Jingxiang",
		username: "5-Xweb2023-jingxiang",
		password: "dd4489ab16de84ab5b74a4208b2499877c02f4410bfa1938f877541729d36d8e57c35de82298c5188ad1840b19d35cf186f95a4bcd44c30a3a6a0a686bb22863",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Xiangcheng",
		username: "5-Xweb2023-xiangcheng",
		password: "9365ba954de5b09330527c2519abdf77be09aabf958f0dff93d6d4473a0e21ee1dd86cbb44c4c24079d5af555d2531fc642ba925e73a2359f2675bfa93ef42cf",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Chenhao",
		username: "5-Xweb2023-chenhao",
		password: "8d86392e0c2bdd328fcaca2a8e9012ba99a8d25cb01bfd40e210ce0a97efd885b70487ff81036364f07c66fe187e0259905bccc1e3feacdaa2b81306a827e36f",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Alex",
		username: "5-Xweb2023-alex",
		password: "35f319ca1dfc9689f5a33631c8f93ed7c3120ee7afa05b1672c7df7b71f63a6753def5fd3ac9db2eaf90ccab6bff31a486b51c7095ff958d228102b84efd7736",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Jan",
		username: "5-Xweb2023-jan",
		password: "a8b766462c783c08757c510f8b78b84b38532fd4b2c2fa47ab22154204e622e81496d49893255c0a466f5c6cfe5de77be5c26e8306ce0df077a1438e7c51cd71",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Janette",
		username: "5-Xweb2023-janette",
		password: "78b0586f1dd733f72fc5753657f2fe33fa799226d2b9f4f09ccd10e238bc5bcf09c21196268ff5265d83fc068974f5a729d74ef3341d3b35eaa01f5674c95a18",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Joyce",
		username: "5-Xweb2023-joyce",
		password: "ec86a3d280ac75565d7ec516cb16556dd1f4a8cd7bcd21a42a24af13fa388f34c773d9a8741aed4db5bfedbc4517dbae9b585d7b767a8684d456e7b4c5362f0d",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Keegan",
		username: "5-Xweb2023-keegan",
		password: "7ab74ad376a3e38e5603cd3da68973f6577332d02c74e813573f3e514a0858528c28d579440dfdf64d68dcc5096b0ff4030767e1bf0c55a682b73147794e574b",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.GEP["5L"]
	},
	{
		name: "Aoqi",
		username: "5-Xweb2023-aoqi",
		password: "85ee0d3537816d0626b7e008d35ec3a92debabe14b627e8e4d6263eca1dcc373c86f66c814f281fd08b3f0a3a114384cd72ca1dcf0b68b2f82c2a085fe4f0134",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Ruilun",
		username: "5-Xweb2023-ruilun",
		password: "0825064aa0aaa11013e569144fcc60455a5cfb405b19bb41b991828388a385473ac64b7668cadff09a5653f119cc6d3511359a372c6d02ea65e3813a2cec4a72",
		GEPclass: classes.GEP["5-4"],
		mixedFC: classes.unknown
	},
	{
		name: "Onion",
		username: "onion",
		password: "bulletproof7",
		GEPclass: classes.GEP["5-1"],
		mixedFC: classes.mixedFC["5J"]
	},
	{
		name: "Aunty Catherine",
		username: "catherine",
		password: "3efc334b437b0fe7275590f8dc74eba236467977abd0409c7a2c7337020009e9d17123b5e5139473e322aa3bde5ab39662b4129464e83926427260e2319d1e4b", // auntycatherine
		restrictedAccess: true,
		allowed: [
			"/resources/non-teaching-staff-appreciation-day/digicard/"
		]
	},
	{
		name: "Kyra",
		username: "tnstimeswriter",
		password: "67269e827bfec6a0fd11bc610d8cf53fb394637c91ac395aea3a9001579e14f30dff86cab04101bef664ea4b89378745032e0494c8d3367c631fd50141861998",
		GEPclass: classes.GEP["5-1"],
		mixedFC: classes.mixedFC["5I"]
	}
]


function usernameSearch(username) {
	let currentUser, CUUsername
	for (i = 0; i < users.length; i++) {
		currentUser = users[i]
		CUUsername = currentUser.username
		if (CUUsername == username) {
			return [currentUser.password, i]
		}
	}
	return -1
}

function loginsys(username, password) {
	let statusref = document.querySelector("#status")
	let user = usernameSearch(username)
	if (user == -1) {
		if (statusref.hasAttribute("style")) {
			statusref.removeAttribute("style")
		}
		statusref.innerText = "Invalid username!"
		return false
	}
	if (SHA512(password) != user[0]) {
		if (statusref.hasAttribute("style")) {
			statusref.removeAttribute("style")
		}
		statusref.innerText = "Incorrect password!"
		return false
	}
	/*var userID = undefined
	var userClass
	var userMFC
	for (i = 0; i < users.length; i++) {
		if (users[i].username == username) {*/
	setLSVars_v2(users[i]);
	let sp = new URL(location.href).searchParams;
	let goto = sp.get("to");
	location.replace(
		users[i].restrictedAccess ?
		users[i].allowed[0]
		: (goto === null ? "/" : goto));
	/*
	if (users[i].restrictedAccess) {
		let allowed = users[i].allowed;
			localStorage.setItem("onlyAllowed", allowed.join(","));
			setLSVars(users[i].name, null, null, null, null, allowed[0]);
			return;
	} else {
		i=user[1]
		userID = i
		userName = users[i].name
		userClass = users[i].GEPclass.name
		userMFC = users[i].mixedFC.name
		amec = users[i].AMEC && users[i].AMEC == true
		ntsad = users[i].ntsad
				setLSVars(userName, userClass, userMFC, amec, ntsad)
			//}
		//}
		if (userID == undefined) {
			statusref.innerText = "We ran into an internal error. Please reload the page."
			if (statusref.hasAttribute("style")) {
				statusref.removeAttribute("style")
			}
		}
	}*/
}

function login() {
	loginsys(document.getElementById("username").value, document.getElementById("password").value)
}


function login_with_replit() {
	username = localStorage.getItem("replit-username");
	let user;
	for (let i=0; i<users.length; i++) {
		let currentUser = users[i];
		if (currentUser.replit && currentUser.replit === username) {
			user = currentUser;
			break;
		}
	}
	/* setLSVars(
		users[userid].name,
		users[userid].GEPclass.name, 
		users[userid].mixedFC.name, 
		users[userid].AMEC && users[userid].AMEC == true, 
		users[userid].ntsad
	) */

	//Newer, improved accounts system
	setLSVars_v2(user);
	location.assign(user.restrictedAccess ? user.allowed[0] : "/");
}
