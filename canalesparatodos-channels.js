let channelList = [{
    name: '',
    getURL: '',
    keyId: "",
    key: "",
    number: 0,
}]

const CHANNELS = new Map([// Canal 7
...["RXZlbnRvc18z", "QTNfQ2luZQ==", "QXJpcmFuZw==", "QmFuZGVpcmFudGVz", "QWxsamF6emVyYQ==", "Q2FuYWxfUFJP", "VW5pdmVyc28=", "Q2FuYWxfMTFfUGFyYW5h", "Q0FOQUxfTFVa", "QWxsZWdyb0hE", "QmFieVRW", "RE5ld3M=", "VVNBX05ldHdvcms=", "QTNfU2VyaWVz", "TWVnYV9UVg==", "QW1lcmljYV9UdWN1bWFu", "UFhfU3BvcnRz", "Q2gxMF9UdWN1bWFu", "SG9tZV9hbmRfR2FyZGVu", "REhF", "Rmxvd19NdXNpY19YUA==", "QUVIRA==", "SG9sYV9UVg==", "QVhOSEQ=", "TVRWMDA=", "V2FybmVySEQ=", "R0VOX1RW", "Rm94X1Nwb3J0c19QcmVtaXVuX0hE", "VG9kb05vdGljaWFz", "VHlDU3BvcnQ=", "QW1lcmljYTI0", "QzVO", "TGFfTmFjaW9u", "Q3JvbmljYVRW", "Q2FuYWxfOF9UdWN1bWFu", "UGFyYWd1YXlfVFY=", "UGFyYW1vdW50", "Q29tZWR5Q2VudHJhbA==", "Rmxvd19NdXNpY18x", "Rmxvd19NdXNpY18y", "Rmxvd19NdXNpY18z", "Qm9vbWVyYW5n", "RHJlYW13b3Jrcw==", "QW5pbWFsUGxhbmV0", "SGlzdG9yeUhE", "SUQ=", "QnJhdm9UVg==", "U29ueUhE", "U29ueV9Nb3ZpZXM=", "VHJ1VFY=", "SEJPX1BPUA==", "RGlzY292ZXJ5VHVyYm8=", "RGlzbmV5SnI=", "SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=", "Rm94U3BvcnRzMl9VWQ==", "RVNQTjQ=", "Rm94U3BvcnRzM19VWQ==", "RXZlbnRvc19IRF9VeQ==", "VGVsZW11bmRvX0hE", "UGFzaW9uZXM="].map(k => [k, 7]), // Canal 6
...["Q2FibGVfWV9EaWFyaW8=", "VHZfR2FsaWNpYQ==", "RVNQTjJfQXJn", "Q2FuYWxfMjE=", "VGVsZW5vdmVsYXM=", "RVdUTg==", "S1pP", "Vm9ydGVyaXg=", "RFc=", "Q05OX0ludGVybmFjaW9uYWw=", "S2lkb28=", "VG9vbmNhc3Q=", "UGxpbV9QbGlt", "RnJhbmNlXzI0", "Tmlja211c2lj", "U29tb3NfTGFfUGxhdGE=", "QXJ0ZWFyX0ludGVybmFjaW9uYWw=", "RXZlbnRvc18yX0hE", "R29sZGVu", "Q2FuYWxfOV9QYXJhbmE=", "R29sZl9DaGFubmVs", "Q2FuYWxfYQ==", "QW1lcmljYV9TcG9ydHM=", "Q2luZW1heA==", "Q2FuYWxfOF9DQkE=", "MjZfVFZfSEQ=", "RGlwdXRhZG9zX1RW", "QXJnZW50aW5pc2ltYQ==", "TWV0cm8=", "QkJDX1dvcmxkX05ld3M=", "VGhlYXRlcl9IRA==", "R2xpdHo=", "UXVpZXJvX0hE", "RGlzY292ZXJ5X1dvcmxkX0hE", "RXVyb2NoYW5uZWw=", "RGlzY292ZXJ5X1NjaWVuY2U=", "SU5DQUFfVHY=", "VFY1X01vbmRl", "TVRWX0hpdHM=", "TVRWX0hE", "Tmlja19Kcg==", "VFZFX0VzcGFuYQ==", "V09CSQ==", "Vm9sdmVy", "VGVsZXN1cg==", "TGlmZXRpbWU=", "QW50ZW5hXzM=", "Rm94X05ld3M=", "VHZfQ2hpbGU=", "TWFzX0NoaWM=", "U3R1ZGlvX1VuaXZlcnNhbA==", "SVNBVA==", "U3VuX0NoYW5uZWw=", "UkFJ", "VmVudXM=", "U2V4dHJlbWU=", "UGxheWJveQ==", "VE5UX1Nwb3J0c19IRA==", "VGVsZWZlSEQ=", "Q2FuYWw3", "RW5jdWVudHJv", "VGVsZW1heA==", "TmV0X1RW", "Q2FuYWxfMTJfQ0JB", "RWxfR2FyYWdl", "RmlsbV9BcnRz", "VW5pdmVyc2FsX0NoYW5uZWxfSEQ=", "RXVyb3BhX0V1cm9wYQ==", "RXVyb25ld3M=", "Rm9vZF9OZXR3b3Jr", "RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=", "Q00=", "UEFLQV9QQUtB", "SGlzdG9yeV8y", "U3lGeQ==", "VEJT", "VENN", "SEJPXzI=", "SEJPX1BsdXM=", "SEJPX0ZhbWlseQ==", "SEJPX0V4dHJlbWU=", "SEJPX011bmRp", "SEJPX1NpZ25hdHVyZQ==", "Q2FuYWxfUnVyYWw=", "VExD", "Q2FuYWxfZGVfbGFfY2l1ZGFk", "RGlzY292ZXJ5X0tpZHM=", "SFRW", "TkJBX1RW", "VW5pdmVyc2FsX0NpbmVtYQ==", "VW5pdmVyc2FsX0NvbWVkeQ==", "dW5pdmVyc2FsX0NyaW1l", "VW5pdmVyc2FsX1ByZW1pZXJl", "VW5pdmVyc2FsX1JlYWxpdHk=", "Q05OX2VuX0VzcGFub2w=", "Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw=="].map(k => [k, 6]), // Canal 5
...["QzlOX0M0", "Q2FuYWxfQw==", "U29tb3NfUm9zYXJpbw==", "U29tb3NfU1RG", "QUJDX1RWX0M0"].map(k => [k, 5]), // Canal 4
...["Q2FuYWxfNV9Sb3Nhcmlv", "VFZfQ2FtYXJh", "Q0hfMTJfUG9zYWRhcw==", "Q0JBMjQ=", "TWl4VFY=", "TG9jYWxfQ2FybG9zX1Bheg==", "Q2FuYWwxMF9DQkFfSEQ=", "VU5JQ0FOQUxfQzQ=", "TGF0YW1fUnVyYWw=", "U29tb3NfQ29ycmllbnRlcw==", "U29tb3NfU2FsdGE=", "U29tb3NfUmFmYWVsYQ==", "U29tb3NfUmVzaXN0ZW5jaWE=", "U29tb3NfRWxfVmFsbGU=", "Q2FuYWxfQ2l1ZGFkX01EUQ==", "NV9EaWFzX1BZ", "VGVsZWZlX0ludGVybmFjaW9uYWw=", "Q0hfMTNfQ29ycmllbnRlcw==", "U2hvd19TcG9ydHM=", "Q0hfOV9SZXNpc3RlbmNpYQ==", "VEVMRUZVVFVST19DNA==", "VGVsZWZlX05ldXF1ZW4=", "VGVsZWZlX1NhbHRh", "U05UX0M0", "UEFSQVZJU0lPTl9DNA==", "Tk9USUNJQVNfUFlfQzQ=", "TEFfVEVMRV9DNA==", "U1VSX1RWX0M0", "Q2FuYWwxMlVSVQ==", "RGlzY292ZXJ5SG9tZUhlYWx0aEhE", "Q2FuYWw0X1VSVQ==", "SEJPSEQ=", "Q2FuYWwxMF9VUlU=", "UlBDX0M0"].map(k => [k, 4]), // Canal 3
...["SEVJX05PVw==", "Qmxvb21iZXJn", "Q2FuYWxfVQ==", "RnJhbmNlMjRfRmxvdw==", "VFZfTmFjaW9uYWxfVXk=", "UmVkZV9SZWNvcmQ=", "U29tb3NfQmFoaWFfQmxhbmNh", "Q2FuYWxfM19Sb3Nhcmlv", "Q2FuYWw3X0JhaGlhX0JsYW5jYQ==", "Q2FuYWxfMTNfU0ZF", "Q2FuYWw5X0JhaGlhX0JsYW5jYQ==", "TmF0R2VvSEQ=", "VE5UX0hEX0FyZw==", "VE5UU2VyaWVz", "Q2FydG9vbk5ldHdvcms=", "Tmlja2Vsb2Rlb24=", "QWR1bHRfU3dpbQ==", "RXZlbnRvczFIRA=="].map(k => [k, 3])]);

function getChannelNumber(getURL) {
    return CHANNELS.get(getURL) || 3;
}

function getChannelKeys(getURL) {
    const channelMap = {
        "QmFuZGVpcmFudGVz": {
            keyId: "0b4f56d5c19b45fb3e75a73b6ec06e6c",
            key: "c464e2b6ded2b52e1e7753b3a859abce"
        },
        //Bandeirantes
        "QWxsamF6emVyYQ==": {
            keyId: "137a1a70fa118b695118a3aad9485b13",
            key: "7c35ca36d4452dfa03d88725a0d16105"
        },
        //Alljazzera
        "QXJpcmFuZw==": {
            keyId: "436d78a75fad9bdcc6d409640c116a62",
            key: "c77471ac3b694513a9c5ff68b8d4fac5"
        },
        //Arirang
        // "SEVJX05PVw==": { keyId: "a8922522d07bc6aea96decd1c61553a6", key: "e5bc7c5ff392119423dbf1c023a7b21c" }, //HEI_NOW
        "VHZfR2FsaWNpYQ==": {
            keyId: "23419f2a0a214038a94e24db13ee85a9",
            key: "4c627ad6b8774e548e28d4aaf82a96a0"
        },
        //Tv_Galicia
        "Q2FibGVfWV9EaWFyaW8=": {
            keyId: "6df95979c5b379c56f6e87a19e37be00",
            key: "034564e9816644d6618644246347bc64"
        },
        //Cable_Y_Diario
        "RXZlbnRvc18z": {
            keyId: "8b2fdf5a35d01a6ac888b7e8b1a2ddad",
            key: "2c088b42e71dba1c572e7f04d2934430"
        },
        //Eventos_3
        "Q2FuYWxfVW5pdmVyc2lkYWQ=": {
            keyId: "93c40cee58a5f415828cc32d0c80d311",
            key: "d00906d71ee69515cd4dca1162d5ae7f"
        },
        //
        "": {
            keyId: "",
            key: ""
        },
        //
        "": {
            keyId: "",
            key: ""
        },
        //
        "": {
            keyId: "",
            key: ""
        },
        //
        "": {
            keyId: "",
            key: ""
        },
        //
        "": {
            keyId: "",
            key: ""
        },
        //
        "": {
            keyId: "",
            key: ""
        },
        //

        "Q2FuYWxfUFJP": {
            keyId: "8df0f1a1e05e9c6a438e23a87c9d06ea",
            key: "5df74d374a2a8a871463e7c438fa3ba7"
        },
        //Canal_PRO
        "Qmxvb21iZXJn": {
            keyId: "1e50891cdc64452aae20d049727f2f3f",
            key: "551871ba1dc6a95597ec0cb82eb3b2a4"
        },
        //Bloomberg
        "VFZfQ2FtYXJh": {
            keyId: "9357704ade444dc3b23be89865af2f58",
            key: "3d03e0a79d8f7b7aa2897c3d24bd4b6a"
        },
        //TV_Camara Paraguay
        "VW5pdmVyc28=": {
            keyId: "41ca5477db3048dbf731fc12604c7504",
            key: "6c7e8e96a86333cbfb4771cbfe9f6b4b"
        },
        //Universo PupoTV Paraguay
        "Q2FuYWxfMTFfUGFyYW5h": {
            keyId: "82d766840c7ea82b4f309ae1d4f9c0d7",
            key: "41071d71fc94b54c87e6140d7b2e9226"
        },
        //Canal_11_Parana
        "Q2FuYWxfMjE=": {
            keyId: "29ccae9b98d74e76b35ac4e9a7fd1af1",
            key: "cd6f0d4dca0fc30533e845fc8ea6a945"
        },
        //Canal_21 Orbe 21
        "Q0hfMTJfUG9zYWRhcw==": {
            keyId: "9c996a1465acddc9c3f7a2dd9b86aa88",
            key: "a2b63e48c99bebb52bfcdb1830efdd3e"
        },
        //CH_12_Posadas
        "Q0JBMjQ=": {
            keyId: "b93e6ce6b4fb51b890ac57d8c0b6a402",
            key: "53eb2499d8c57cf6f9ea887c8683c591"
        },
        //CBA24 - Canal U
        "VGVsZW5vdmVsYXM=": {
            keyId: "60cb38a05880cd0eb429f71398609540",
            key: "c251aac7943c0d1324aa9a4129f3afd4"
        },
        //Telenovelas
        "Q2FuYWxfVQ==": {
            keyId: "202a19e4871c4739a8010aa7b25af37d",
            key: "07015b4cfa048a3351b83d60aeca5ead"
        },
        //Canal_UCL
        "Q0FOQUxfTFVa": {
            keyId: "f7523ea5a2da78c465d928be1d81e2a5",
            key: "870ad69e98abd52b443bd8f0204b3bc4"
        },
        //CANAL_LUZ
        "RVdUTg==": {
            keyId: "07df3c48652a431ab779d133f085b799",
            key: "ee2fbeec1ecdffa5617383f684dfda0e"
        },
        //EWTN
        "S1pP": {
            keyId: "695d07988114f7fec31f8f27a6d67c32",
            key: "8e4fbb96cff6a31c88f81565b199a13a"
        },
        //KZO
        "QWxsZWdyb0hE": {
            keyId: "e55e61b81b992d6c21466891d72157e9",
            key: "566d341bf7209a88976e75c20ad7aca2"
        },
        //AllegroHD
        "Vm9ydGVyaXg=": {
            keyId: "eabe2c22350c26c7f0ad84b34932f08d",
            key: "39fa06836ec0f81d8dd9b6e01a3070e3"
        },
        //Vorterix
        "TWl4VFY=": {
            keyId: "0e1327b5b1f4dfe767aec622c9ef64ce",
            key: "60c64a922af0121bf73261c825e33f18"
        },
        //MixTV
        "RFc=": {
            keyId: "e21fc12c6ee185fbc90a052b05026be9",
            key: "0f96fd52903707aac0b42853a043ffd0"
        },
        //DW
        "U1VSX1RWX0M0": {
            keyId: "988ae4e8408981609ded9f8b23bbf79d",
            key: "b867c66791bcad67ee142be1e21c2577"
        },
        //SUR_TV_C4
        "Q05OX0ludGVybmFjaW9uYWw=": {
            keyId: "9f24708ad1184ee3a04b650941f9894b",
            key: "e5bc7c5ff392119423dbf1c023a7b21c"
        },
        //CNN_Internacional
        "S2lkb28=": {
            keyId: "dcd89337a501ab929c01a039774089dc",
            key: "e96cc7be9139a8d581b3f5eebebfc10d"
        },
        //Kidoo
        "QmFieVRW": {
            keyId: "9e09f0a3ecb932582e0f3bc6a6194c8d",
            key: "6d2363b7ba7680ea3bf6dcbad1efa5bf"
        },
        //BabyTV
        "VG9vbmNhc3Q=": {
            keyId: "10638a722eb54c64bfb0e7a77483686a",
            key: "41a7d3d522e19215b7e8f611b6902d61"
        },
        //Tooncast
        "UGxpbV9QbGlt": {
            keyId: "8e88e1572dcd2b31a10026668d628d61",
            key: "ab95bdc2655aff4f4a8e512fb68c80df"
        },
        //Plim_Plim
        "RnJhbmNlXzI0": {
            keyId: "72187f2651724db18505cdcad435841d",
            key: "6f41e05476e34edf7bb9dc51f08f95df"
        },
        //France_24
        "RnJhbmNlMjRfRmxvdw==": {
            keyId: "c8a3d29db38c4a9fa9a838c3d4d681db",
            key: "d3aa374c4c0de33f463b4387a18297a6"
        },
        //France24_Flow
        "Tmlja211c2lj": {
            keyId: "eae6c12ccab349e6ae675ab6ed8a476c",
            key: "4a4fd86ea9db4417ec86c237d3111b18"
        },
        //Nickmusic
        "RE5ld3M=": {
            keyId: "21563d82cfb7fdd18b213f0bd92a274f",
            key: "5940d8d0b57b9e6533e99cc0e7bf2f8e"
        },
        //DNews
        "TG9jYWxfQ2FybG9zX1Bheg==": {
            keyId: "7804609194dc7145bf297153276096d2",
            key: "03d3f4e3d0b35362dadfddce10dee00c"
        },
        //Local_Carlos_Paz
        "Q2FuYWxfQw==": {
            keyId: "9a866ca98bef2351a68e4843139f8073",
            key: "b0893077653d1ef842a1b65d8b34455a"
        },
        //Canal_C
        "VFZfTmFjaW9uYWxfVXk=": {
            keyId: "c50518d7f59f4c0aa9a3079fe2b014fd",
            key: "96038f76a2ba33866ea54eb4b260573f"
        },
        //TV_Nacional_Uy
        "VVNBX05ldHdvcms=": {
            keyId: "c754b522b3b87dc2ba2da3e35154ec14",
            key: "141a51e9e83861ae99b4b217431710b3"
        },
        //USA_Network
        "Q2FuYWwxMF9DQkFfSEQ=": {
            keyId: "6d85fcc70989d0dbe8d70dd70a4629c0",
            key: "a953290192fd5db5bf7936a88ecc6877"
        },
        //Canal10_CBA_HD
        "VU5JQ0FOQUxfQzQ=": {
            keyId: "63a3729cfd60f24f7e1266bee5eca02c",
            key: "cb9ed028af40654e1aa43934ee58db58"
        },
        //UNICANAL_C4
        "UmVkZV9SZWNvcmQ=": {
            keyId: "b0bd8ea11b3f4c219903085ef1d44b0d",
            key: "9a25709a72c2ca93cb738665736cfa5a"
        },
        //Rede_Record
        "QTNfU2VyaWVz": {
            keyId: "5e34e08ae5ae440f01a03e505dd24a57",
            key: "ed30cc7f5040a75d73f619320249272b"
        },
        //A3_Series
        "TGF0YW1fUnVyYWw=": {
            keyId: "abdfd83824e9ba585f74fb72c647aa4f",
            key: "9967e06e39893998d16714988d9d87f1"
        },
        //Latam_Rural
        "U29tb3NfUm9zYXJpbw==": {
            keyId: "863ed7f26cf51850b9ed735545c788ce",
            key: "789edf190d78baefb569e8ca09ac86c2"
        },
        //Somos_Rosario
        "U29tb3NfQmFoaWFfQmxhbmNh": {
            keyId: "64c7e9ed4e3930b54d020c08a6792f10",
            key: "737b6374d4492e8c233ca2c2ebac9b85"
        },
        //Somos_Bahia_Blanca
        "U29tb3NfU1RG": {
            keyId: "1344e18e45e6e6e5ec0a302d769c8e52",
            key: "913cfe90bb3af2d402eada6ad50ce22d"
        },
        //Somos_STF
        "U29tb3NfQ29ycmllbnRlcw==": {
            keyId: "f0179a4ba9f407dfdee057a33f8f220c",
            key: "e0c3f11cb1d7f8d17b7a1532f29edb0b"
        },
        //Somos_Corrientes
        "U29tb3NfTGFfUGxhdGE=": {
            keyId: "bffd3b447aa44a429a703245836e46fa",
            key: "13be31c0bcb76b28b1248bf64ab3926e"
        },
        //Somos_La_Plata
        "U29tb3NfU2FsdGE=": {
            keyId: "9879546bcfd8a4231ce7502062f424fb",
            key: "e071693afea3e58f8b28bf5b2311e3fc"
        },
        //Somos_Salta
        "U29tb3NfUmFmYWVsYQ==": {
            keyId: "7071b5b3283cebd376d1ba9c6e53ba6e",
            key: "87a6c4c8baaefb073270e92f092b4c25"
        },
        //Somos_Rafaela
        "U29tb3NfUmVzaXN0ZW5jaWE=": {
            keyId: "a7c3579af87560a1dbc599c882516f95",
            key: "cdfe03336cc80ef7c3dd9eb19f298d04"
        },
        //Somos_Resistencia
        "U29tb3NfRWxfVmFsbGU=": {
            keyId: "513f2056bf40d9123918fd7939fbf065",
            key: "075ee6dd9b67d88be5642eaa510e91cb"
        },
        //Somos_El_Valle
        "Q2FuYWxfQ2l1ZGFkX01EUQ==": {
            keyId: "b57763b8d9c205d609ea509432201fac",
            key: "a476cf79190fe4810efdd81e32317ff3"
        },
        //Canal_Ciudad_MDQ
        "QUJDX1RWX0M0": {
            keyId: "c0bef75733b2645452432bd4e76f36f5",
            key: "ea16243367d814c1d53f1eaf21f005ff"
        },
        //ABC_TV_C4
        "TWVnYV9UVg==": {
            keyId: "80196dfcb7852e2b5e1165b3b17030e1",
            key: "58face97c908502f17549eb62459bd80"
        },
        //Mega_TV
        "NV9EaWFzX1BZ": {
            keyId: "746091c502edcf1e9d003535ce01f3e4",
            key: "29081b5f92d1a37c88fbbd0ece55c839"
        },
        //5_Dias_PY
        "RXZlbnRvc18yX0hE": {
            keyId: "e54e9ea87a634658fbba0e380aa701a7",
            key: "4e486d25d7d0e7d131743b285963c643"
        },
        //Eventos_2_HD - Muestra Flow
        "VGVsZWZlX0ludGVybmFjaW9uYWw=": {
            keyId: "cc0abcc84ec380cfc192b96d32abad23",
            key: "9b7825385b89ff82d01909a4ae404877"
        },
        //Telefe_Internacional
        "QXJ0ZWFyX0ludGVybmFjaW9uYWw=": {
            keyId: "5bd469f8bf268d5d148c3971c7c23fca",
            key: "9af98080d22846fdf2988b8ba9ec4add"
        },
        //Artear_Internacional - El Trece Internacional
        "R29sZGVu": {
            keyId: "b7d085dbd4539afcc6a55445efb2b04e",
            key: "0a55fbe044fed379d1632b589265b571"
        },
        //Golden
        "QW1lcmljYV9UdWN1bWFu": {
            keyId: "ed542fdaa4598671e26aca3e160afed7",
            key: "cdb880c60523b9ebc61b9003c41f8048"
        },
        //America_Tucuman
        "Q0hfMTNfQ29ycmllbnRlcw==": {
            keyId: "ee837d0ec414d95a51b0c7a57d49d307",
            key: "883fd72dc9b72db33d7b4f8dc0eb0016"
        },
        //CH_13_Corrientes
        "Q2FuYWxfOV9QYXJhbmE=": {
            keyId: "dd573858f3414066b9292ef6397a5c3c",
            key: "593eb5f7facce4240ff7a5f26afd47e0"
        },
        //Canal_9_Parana - El trece
        "Q2FuYWxfM19Sb3Nhcmlv": {
            keyId: "662447df521fb590b72b1a11671c2afd",
            key: "81c204c443987d7b176587d626a124a0"
        },
        //Canal_3_Rosario - El trece
        "Q2FuYWw3X0JhaGlhX0JsYW5jYQ==": {
            keyId: "a15243320c0a79defa8814252e3e8c07",
            key: "0659db05632c0061c126db7a12582499"
        },
        //Canal7_Bahia_Blanca - El trece
        "Q2FuYWxfUnVyYWw=": {
            keyId: "b02c568163c14cfda4ddb958a0aab742",
            key: "ef64a70ac85a663a3308be6476610aad"
        },
        //Canal_Rural
        "U2hvd19TcG9ydHM=": {
            keyId: "df3ed6245bb9af1a0346379e8e475dff",
            key: "f86f8457438d4e449d53b956cc1be664"
        },
        //Show_Sports
        "UFhfU3BvcnRz": {
            keyId: "9393321daef1463fc7e2e060298db852",
            key: "be6bc91e17816f67e62596bed463c5ad"
        },
        //PX_Sports
        "Q2FuYWxfMTNfU0ZF": {
            keyId: "59ef9057114f44a480b62e36a6b1374f",
            key: "74ef97bc54df5655c3a1d4f80b16e8d7"
        },
        //Santa Fe Telefe
        "Q2FuYWw5X0JhaGlhX0JsYW5jYQ==": {
            keyId: "7ccfc823faed878832b3e4a69fcb72a2",
            key: "d68b394ab768f4a2ec148ab8cdac46ef"
        },
        //Bahia Blanca - Telefe
        "Q2gxMF9UdWN1bWFu": {
            keyId: "7a53740aa52d8b50ccb218aab5e9d50e",
            key: "e772fa4a4997b50a0ff04e2ef286a864"
        },
        //Ch10_Tucuman
        "Q2FuYWxfYQ==": {
            keyId: "324ec73787744554ae1aef231a4f8f97",
            key: "677a040674d1d0eccef327269b222bae"
        },
        //CANAL A
        "QW1lcmljYV9TcG9ydHM=": {
            keyId: "a0aa01337a2148bda1e21862295ae037",
            key: "fee0f87a0527497351fc54ce36ad1de2"
        },
        //Americasports-arg
        "REhF": {
            keyId: "ff800156f81f70c687eccaadedc2ca15",
            key: "937ba1301e27008b34d02b9d8a31a0db"
        },
        //DHE
        "R29sZl9DaGFubmVs": {
            keyId: "38d6226b7cd2cfa86b4b9cdaa455e7d7",
            key: "24f0ef2bf787647cc02df870417eed2b"
        },
        //GOLF TV
        "SG9tZV9hbmRfR2FyZGVu": {
            keyId: "43bc6a87ee4f21aa320ba00b980a6fd8",
            key: "bd55130539a30faa1d90b3142eebe0b2"
        },
        //HGTV
        "Q0hfOV9SZXNpc3RlbmNpYQ==": {
            keyId: "dde29700ee0423e1afe3828c6f251295",
            key: "1928b62bc191bd26c357137d7d909868"
        },
        //Canal 9 Resistencia
        "VW5pdmVyc2FsX0NpbmVtYQ==": {
            keyId: "f6ae2e17173055e4ca69dc18963406ae",
            key: "5a955c29eb88a0b4c9a2538cc4b3aea2"
        },
        // Universal Cinema
        "VW5pdmVyc2FsX0NvbWVkeQ==": {
            keyId: "062c5d25105a3a935b67e36923c73f28",
            key: "88c2d4cec420f18d2477152c66c7870d"
        },
        // Universal Comedy
        "dW5pdmVyc2FsX0NyaW1l": {
            keyId: "1efd7edf60e1514f775dd13d046ae708",
            key: "c2ef1abbd945c62c11b1375eaaa50f0d"
        },
        // Universal Crime
        "VW5pdmVyc2FsX1ByZW1pZXJl": {
            keyId: "0eb20b51ad13b58ad417f11318e588b3",
            key: "ad5d29a33d73d21187157802de8e6097"
        },
        // Universal Premiere
        "VW5pdmVyc2FsX1JlYWxpdHk=": {
            keyId: "cedd9c1a5c2ae43f80ee3197212016d6",
            key: "bf47a3c39e164a97ea6adc4c8dd57435"
        },
        // Universal Reality
        "RVNQTjJIRA": {
            keyId: "e884b711ab111beb8a7ba1e7bcbdc9bf",
            key: "cb89ee3961599e3e648a5aad60895f34"
        },
        //ESPN
        "RVNQTjJfQXJn": {
            keyId: "65a5bfa3c7a72dde60be9b0c7406c8fc",
            key: "0b40ae9f78a7bac3b57ecbf72d3c081e"
        },
        //ESPN2_Arg
        "RVNQTjM": {
            keyId: "f4c9f97e2a36feab0e5077f2b44cbc4e",
            key: "1743cd03dfe3736b2c95da91a783af38"
        },
        //ESPN3
        "RVNQTkhE": {
            keyId: "cc8d44406ed6bf1898ad9f7a2d64f29e",
            key: "fb85d059687ab0fc67805806204edbdf"
        },
        //ESPNHD 4
        "RVNQTjQ=": {
            keyId: "24f2b3e741f0d9e9a8d516faff38bddc",
            key: "bbd3fd02fb104e1463ac528a13f67e4a"
        },
        // ESPN 5
        "Rm94U3BvcnRzM19VWQ==": {
            keyId: "5fc7b662e69c0fbf8d39691166b1c919",
            key: "89157cdd25df25d56f1ecccee3850888"
        },
        // ESPN 6
        "Rm94U3BvcnRzMl9VWQ==": {
            keyId: "5fc7b662e69c0fbf8d39691166b1c919",
            key: "89157cdd25df25d56f1ecccee3850888"
        },
        // ESPN 7
        "Rm94U3BvcnRz": {
            keyId: "cbc2a0c7a38df0aa3333cd71841d3b0d",
            key: "aac61b730e2ac1df23f1e872e7541c1b"
        },
        //FoxSports
        "Rm94U3BvcnRzMkhE": {
            keyId: "c98ddffc470fe449ae1a8d6492116976",
            key: "5086d370e840010232cf4532b16e197f"
        },
        //FoxSports2HD
        "Rm94U3BvcnRzM0hE": {
            keyId: "55b47390cf9e4997dae6dac85e057875",
            key: "fa39e855543c5d70f30600d59e5e4c1b"
        },
        //FoxSports3HD
        "VE5UX1Nwb3J0c19IRA": {
            keyId: "bc80fa3da696e503f940fde5f681a1c5",
            key: "ea46e4e9f1132e8dd71fb77f7d55058a"
        },
        //TNT_Sports_HD
        "Rm94X1Nwb3J0c19QcmVtaXVuX0hE": {
            keyId: "4c230dbc7f6a4bfa6ad0aa73ff792374",
            key: "4186a7c2a15f590a9399886feaec4257"
        },
        //ESPN_Premiun_HD
        "VHlDU3BvcnQ": {
            keyId: "2b21c8fa9a329cce311a4c4a4aa996a1",
            key: "cc23ea1fb32629f9e1f48c8deeae3e5b"
        },
        //TyCSport
        "VHlDX0ludGVybmFjaW9uYWw": {
            keyId: "58e1ebe75d944f6a98ea67b1c7c0a572",
            key: "1c311b069dbce31ce8e62a6e7e2433eb"
        },
        //TyC_Internacional
        "Q2FuYWw3": {
            keyId: "cc8c82ac2ec7e9799527c29db7354e81",
            key: "cc4aae173dd2ef17ae26be3f7ae87662"
        },
        //Canal7-TV PUBLICA
        "RGVwb3JUVkhE": {
            keyId: "f362097815892a4b83950f1d106ff0b2",
            key: "4349e42e81c31a8389f4a42fcd298928"
        },
        //DeporTVHD
        "VlRWX0hE": {
            keyId: "b96960aa715a4e51b7e952e81c99ac8e",
            key: "5bbffc680764dbd63d90b774b3aa0c0a"
        },
        //VTV_HD
        "VlRWX1BsdXNfSEQ": {
            keyId: "da8a49a594160cc0059f07b9f71cd39a",
            key: "37ca91dd799b351a02445151c7f61070"
        },
        //VTV_Plus_HD
        "RXZlbnRvczFIRA": {
            keyId: "5c86e237317c2231ac1bc130e995fad6",
            key: "dcacf7b239ee03df3c69ca11dbcde4eb"
        },
        //Eventos1HD-ESPN EXTRA?
        "TkJBX1RW": {
            keyId: "d0c38de3c9844e4e9f975dffb3eff8ad",
            key: "141ca0fdf6ebadfa7107576b8e09e117"
        },
        //NBA TV
        "QW1lcmljYTI0": {
            keyId: "3b1b027dd011af20fd9956c16dc084fb",
            key: "45f75aacf06593c9b693fe427c67e5b8"
        },
        //America24-A24
        "QTNfQ2luZQ==": {
            keyId: "d6ff881a6f07986a80d6ad6f041b57d4",
            key: "b401c87c2ab11a1a488ee1c474b109ae"
        },
        //A3_Cine
        "QUVIRA==": {
            keyId: "db12035627a4b3d7198b761f36b4a290",
            key: "80ca761a875992ac0e50b0851d5563fe"
        },
        //AEHD
        "QU1D": {
            keyId: "1fa6a86fd80b6d1425dde74482b5dc9c",
            key: "744c3636d57a651ab444cf9fe5f95b33"
        },
        //AMC
        "QW1lcmljYVRW": {
            keyId: "8ea235ce0826408b221c498115a9b62d",
            key: "7aa9266ed91ea4510483370029dfcf45"
        },
        //AmericaTV
        "QW5pbWFsUGxhbmV0": {
            keyId: "4146a8ecbb0540dc807c6389ee87e0bc",
            key: "0c3cdc1b3e4617c57361265e9fa4c5bd"
        },
        // Animal Planet
        "QW50ZW5hXzM=": {
            keyId: "1e1ad422a6714482b66fa702c16e50c6",
            key: "4fdf28a0ab91356ca55a75f4e9bf8c92"
        },
        //Antena_3-INTERNACIONAL
        "QXJnZW50aW5pc2ltYQ": {
            keyId: "a6243f46366445ebbf3117ec27365481",
            key: "81667cdc3bcf19a6a66c0919fa00a20b"
        },
        //Argentinisima
        "QVhOSEQ=": {
            keyId: "03e77b5bbf5135a85d587c5af2f2f730",
            key: "1dd1ab1938a791d03f09eb88478b4880"
        },
        //AXNHD
        "QkJDX1dvcmxkX05ld3M": {
            keyId: "019f72f2091d4cbea59ff8c85b117f86",
            key: "a4eac51195506752f9f63ad24def9c37"
        },
        //BBC_World_News
        "QnJhdm9UVg==": {
            keyId: "ad7fbbec39cea4a5a63ac13d94da48d4",
            key: "f71087b4dc211db079237c0fb783eb93"
        },
        //BravoTV
        "QzVO": {
            keyId: "050df5c6e78c774e78c3e99eef8a1b29",
            key: "0e4141d6ab21a36cbc4da777ab3096d4"
        },
        //C5N
        "QzlOX0M0": {
            keyId: "646700eeb14cadfa0543a20cf413d37e",
            key: "4fc037c462023764624d8446442cbbca"
        },
        //C9N_C4
        "Q2FuYWwxMF9VUlU=": {
            keyId: "8dd34782d754f8fcb1e8b38da9ffad0b",
            key: "6fb97467c0f0ea13f86d41a70e029c51"
        },
        // Canal 10 uru
        "Q2FuYWxfMTJfQ0JB": {
            keyId: "90422640d3e846159fa450f83870ed4a",
            key: "abb3cd94aece1a462df25a8f21085cca"
        },
        //Canal_12_CBA
        "MjZfVFZfSEQ": {
            keyId: "e32aaa4b67430b3b51be1efce5a74ac5",
            key: "ad60c5e1d378a97271bf8688f094d092"
        },
        //26_TV_HD
        "Q2FuYWw0X1VSVQ==": {
            keyId: "dabefaac89742589778fcfab78f08354",
            key: "896dd914683b01c8044ffd34d7b6416b"
        },
        //Canal4_URU
        "Q2FydG9vbk5ldHdvcms=": {
            keyId: "d7df56efaa36a71141d238854cc46d1d",
            key: "8abb2ee9150d8b2af8ebec0de0f833c8"
        },
        // Cartoon Network
        "Qm9vbWVyYW5n": {
            keyId: "5792e613fceb699c79cbc0e75fe4cd37",
            key: "a672793730476ed23e5c1bce2ff570c6"
        },
        //Boomerang-cartonito
        "SU5DQUFfVHY=": {
            keyId: "d44f40e49d2945c1a3701c0885ff0b00",
            key: "6382b6279087402714b6824688c456df"
        },
        //INCAA_Tv-CINE AR
        "Q2luZWNhbmFsSEQ=": {
            keyId: "6003e92dd0d9f548329015c9e15dd578",
            key: "213cf85cb5f9fe569757004a77e05948"
        },
        //CinecanalHD
        "Q2luZW1heA==": {
            keyId: "977928a92b82ba3781741a6470f8f45b",
            key: "51f4e62827c128f7210b79a11587661a"
        },
        // cinemax
        "TWFnYXppbmU=": {
            keyId: "4f1235069d34c22cb73d9b78bae15587",
            key: "55e068ff6b152e34c66dc639b38e8692"
        },
        //ciudad Magazine
        "Q00=": {
            keyId: "682f36b5736f4560951ca14b80d29524",
            key: "3accb729067a39b3b8143f1b447b9d25"
        },
        //CM
        "Q29tZWR5Q2VudHJhbA": {
            keyId: "4013f784c5ef4318ad47024e61eb094e",
            key: "bad433a547f97c7f65cda5e83b8dd416"
        },
        //ComedyCentral
        "Q3JvbmljYVRW": {
            keyId: "745e7abcc90d41ab706b2ac2f4371da3",
            key: "50acd9d19d1361cb4a8a13a867bdc352"
        },
        //CronicaTV
        "RGlzY292ZXJ5SEQ=": {
            keyId: "c283c84a7af0d7c8b9b612a8fb22a001",
            key: "f45510c721eebd6eaa86a2e16ccbd77d"
        },
        //DiscoveryHD
        "RGlzY292ZXJ5SG9tZUhlYWx0aEhE": {
            keyId: "9b0a76dd7a0df1e1b4320aeb1254d1a9",
            key: "d011267775c38d6d2ab09b428c03d63f"
        },
        // Discovery hyh
        "SUQ=": {
            keyId: "0956caf2e2bd41f49fdcead7cc94fe24",
            key: "640c49578073a911938617eb4e652d6c"
        },
        // Discovery  id
        "RGlzY292ZXJ5X0tpZHM=": {
            keyId: "ffb2f0f63c23a3592d4653e938b9ca19",
            key: "d3661ae881fc55fc7a15815cd439747b"
        },
        // Discovery Kids
        "RGlzY292ZXJ5X1NjaWVuY2U=": {
            keyId: "46ba409fb04e40fb86b466d97e3a9588",
            key: "f129fb9b5d213e20e2abe529b8cf2597"
        },
        //Discovery_Science
        "VGhlYXRlcl9IRA==": {
            keyId: "5279c05ea51c4dae8e7fa6be88448089",
            key: "b28dfafba4b848dfd5d7c177ebf19108"
        },
        //DISCOVERY Theater_HD
        "VExD": {
            keyId: "58761c7b2819491eb3a0d765842c341a",
            key: "9dabc48f88bd7f266734e57501bd6f47"
        },
        // Discovery TLC
        "RGlzY292ZXJ5VHVyYm8=": {
            keyId: "a611ddbf8c15fa617a0c391cb7b3e128",
            key: "0cd1300baf8890380fd41124962195c4"
        },
        // Discovery TURBO
        "RGlzY292ZXJ5X1dvcmxkX0hE": {
            keyId: "34ee94c2263345f7a3a590661264e490",
            key: "56757d656a697ab7a2e5e083b5d21bb5"
        },
        //Discovery_World_HD
        "RGlzbmV5Q2hhbm5lbEhE": {
            keyId: "4a742e478d14023e1993e011d9415f94",
            key: "0df77ede9bc744376836d21afa137dda"
        },
        //DisneyChannelHD
        "RGlzbmV5SnI=": {
            keyId: "bd29c4a538f28845ce33581111749428",
            key: "46d9589f41a11c3637c07c604956deac"
        },
        // Disney Junior
        "RHJlYW13b3Jrcw==": {
            keyId: "7f30c43e47544412221fd64201d92f4b",
            key: "f83d09d75a0946b1d71aa48c201b4d8b"
        },
        //Dreamworks
        "RGlwdXRhZG9zX1RW": {
            keyId: "9666b195171442afd4551a8de01291a6",
            key: "1c0061df9b4b098e40355167e97cfbf0"
        },
        //Diputados_TV
        "Q2FuYWwxMlVSVQ==": {
            keyId: "dfde9d35d7438bfdf61da5dfac0557c1",
            key: "acb13370c03a7254e2bb9cc9d2125017"
        },
        //Tele
        "Q2FuYWw5": {
            keyId: "24f4ff211136ae6512a1b552200db405",
            key: "602122f8426c5c942b8c18d299cc6020"
        },
        //Canal9
        "QXJ0ZWFySEQ": {
            keyId: "5179017f49326d14af0a9ceec831aee6",
            key: "09b4a463b029ebc28a288bed2da70a76"
        },
        //ArtearHD-EL TRECE
        "RW5jdWVudHJv": {
            keyId: "ac3ae78beb64478ab390b4ad70e3e0c9",
            key: "c7d669761c3516d852a0edf9e07c9198"
        },
        //Encuentro
        "RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=": {
            keyId: "5883553207f13e3dc8cecd1113d5ba68",
            key: "45434d40636dfa0e5312b93218e02185"
        },
        //E_Entertainment_Television
        "RXVyb2NoYW5uZWw=": {
            keyId: "6f0fc214d9844a7590f0884d55b44c42",
            key: "b2fe1bb5f9c79035301c328c1e93b0ee"
        },
        //Eurochannel
        "RXVyb25ld3M=": {
            keyId: "d86b0f56d32f45adb0a6b4e488c8f0c2",
            key: "e4f180b0e61be3e80ab602df5e56ff3f"
        },
        //Euronews
        "RXVyb3BhX0V1cm9wYQ": {
            keyId: "b47f257df0314d09a7f8355c3abe1dc6",
            key: "bdc9f1696a82ee7398dd3a7fa82300e2"
        },
        //Europa_Europa
        "RmlsbV9BcnRz": {
            keyId: "91c540d350f34f5386f3f1c77f74001f",
            key: "54ee72810551da0cba0c45a8df651962"
        },
        //Film_Arts
        "Rmxvd19NdXNpY19YUA==": {
            keyId: "b2aae44a74144be8b2118e20d1412bab",
            key: "8a7ae996d12d8d5d5637d1044f8e08b7"
        },
        //Flow_Music_XP
        "Rmxvd19NdXNpY18x": {
            keyId: "f34cd7709f093d23d4db009107d96862",
            key: "d8a829138d970b45e867c9733a31b2f0"
        },
        //Flow_Music_1
        "Rmxvd19NdXNpY18y": {
            keyId: "596b599580b39ae2f3c413f7eae36902",
            key: "2d7e3d5d31f68690fd877a111f84e8e3"
        },
        //Flow_Music_2
        "Rmxvd19NdXNpY18z": {
            keyId: "e078b15ed770ec71f803c0ecc43de033",
            key: "7010bccda544f74d1b425c4cebd082d4"
        },
        //Flow_Music_3
        "RXZlbnRvc19IRF9VeQ==": {
            keyId: "48d0e34c8797c5c2a742d2630a8fb975",
            key: "fb5d12b9d8febe836e5670abd003ddca"
        },
        // Flow_Eventos 1 UY
        "Rm9vZF9OZXR3b3Jr": {
            keyId: "6ca0fbad21a0e908c0280dcc27e6ee0e",
            key: "62670eedbafdf9360b4ecaed738e26cd"
        },
        //Food_Network
        "Rm94X05ld3M=": {
            keyId: "3fe3f31a5e7b48a1b548e9364757ce66",
            key: "32993fc281207fe915f6f1e990957868"
        },
        //Fox_News
        "RlhIRA==": {
            keyId: "9ab9c42c713e0fb5517dc77cc19d6755",
            key: "d8c271b82387e609b6c19e5e79240aff"
        },
        //FXHD
        "RWxfR2FyYWdl": {
            keyId: "03d1dfb8df034d8b81e57753df00a36d",
            key: "08d83660db4a73bb1d61d60b09df5f4d"
        },
        //El_Garage
        "R0VOX1RW": {
            keyId: "49eb924ba998ca7fbbaee30dcef1ecb4",
            key: "6e131b04b2e87598fb588ac205673698"
        },
        //GEN_TV
        "R2xpdHo=": {
            keyId: "f812ef81d6ce425a8db4012a1ef8b0c1",
            key: "5c2b9791b1074727eb349588e32bdc0a"
        },
        //Glitz NO FUNCIONA
        "R291cm1ldA==": {
            keyId: "93d853ac4c8e24cf0295f6f97ee53bd3",
            key: "fa5817fab4fb054ccea1abb9f3d767ed"
        },
        //Gourmet
        "SEJPSEQ=": {
            keyId: "5317283f4110fac3fb3a0becd9f648bc",
            key: "0754a03c926b1247216e01d9dbcfac28"
        },
        // HBO
        "SEJPXzI=": {
            keyId: "c90cc57ad2c436e5a77db2f8d9db2d85",
            key: "04f6c73984bdcffd013050608497935d"
        },
        // HBO 2
        "SEJPX0ZhbWlseQ==": {
            keyId: "535473132f68082160b489482ca35f8e",
            key: "e90fd91fcd3fc809bed2b1c0d37f7297"
        },
        // HBO Family
        "SEJPX011bmRp": {
            keyId: "7821b2662148fe333d5191acbb8a5c1f",
            key: "ae43f3e2545237ebda58b13813b5d328"
        },
        // HBO Mundi
        "SEJPX1BsdXM=": {
            keyId: "f0e7f7d458990edfab7b98b412564615",
            key: "79205754b7f84a62661c2dbe9de5dd5d"
        },
        // HBO Plus
        "SEJPX1BPUA==": {
            keyId: "f4e1ce5cef7e9a110fe968f8881b21fa",
            key: "6bbe2062b150b11496cdd5fbdd9c89d6"
        },
        // HBO POP
        "SEJPX1NpZ25hdHVyZQ==": {
            keyId: "e866499fbc1149f49989672075aa3a68",
            key: "d2dd5c95623c6343240981c2202fc311"
        },
        // HBO Signature
        "SEJPX0V4dHJlbWU=": {
            keyId: "d504011bbef467c0de3a7534e302a6d4",
            key: "334103e2abe16faa7f9ab2e3097c5a58"
        },
        // HBO Xtreme
        "SGlzdG9yeUhE": {
            keyId: "e82318e518ba70cea3d7b37bef99e692",
            key: "a05fcb634c071a514e3039e1c274b4db"
        },
        // History Channel
        "SGlzdG9yeV8y": {
            keyId: "ecbe97ec34784304b390a12ba3854ccf",
            key: "5a0ee36ed9b8920cb19546fd92f2d415"
        },
        // History Channel 2
        "SG9sYV9UVg==": {
            keyId: "5d759477f0ad1bdef2c6de09e7c275fd",
            key: "82cc6eea185eecc934df95adfbbf9dbc"
        },
        //Hola_TV
        "SVNBVA==": {
            keyId: "db764164934a48749a7a01bd015694f3",
            key: "512f3c8869af45e6e5dd1525b6a77867"
        },
        //ISAT
        "TGFfTmFjaW9u": {
            keyId: "f4eade7bbc39b25402acfa301bbad04a",
            key: "a74d1df4235a74878327aa8d53ff283c"
        },
        //La_Nacion
        "Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw==": {
            keyId: "b37d85be9d2b4b619f945beff713fda3",
            key: "917309c98f072b0bd484dd6560c6d166"
        },
        //canal Las estrellas
        "TEFfVEVMRV9DNA==": {
            keyId: "7c6a481adf6a080ec09637d3f25989cf",
            key: "036e343d636b821ab81838de387b62cb"
        },
        //LA_TELE_C4
        "TGlmZXRpbWU=": {
            keyId: "eae51b1d67ff47adac7b6bd3a4b1120a",
            key: "b4d6bb47193f33ffc12379cdc447455d"
        },
        //Lifetime
        "TWFzX0NoaWM=": {
            keyId: "dac8ff1688994efd898222acdd05cafc",
            key: "22fdf97c7233667518258ed16ccb2545"
        },
        //Mas_Chic
        "TWV0cm8": {
            keyId: "719aa3a5e270c7f69eba374ed80d7986",
            key: "97ac59118cf4cf242e2c31e87cd38e1e"
        },
        //Metro
        "TVRWX0hE": {
            keyId: "0c9eb3ead38a122ac460ad96a8ebfd2e",
            key: "66bfbfa4449eb8bc1bcf7577d5bffaad"
        },
        //MTV_HD
        "TVRWMDA=": {
            keyId: "1f0c09ed9e5841cf867ba6eb3cdfd61d",
            key: "802c89c6bae6a245aaafcf40c1986fc1"
        },
        //MTV00
        "TVRWX0hpdHM=": {
            keyId: "61008dfc867544cd872de99b1f2b82cf",
            key: "716449756316b91c54803aaa22a2fbf0"
        },
        //MTV_Hits
        "TmF0R2VvSEQ=": {
            keyId: "4be0c61ceddc62294cc9e23b627af53d",
            key: "852c1935d11c3c53d0a1ceff3bb3bf16"
        },
        // NATGEO
        "TmV0X1RW": {
            keyId: "89d433166edd31d56df2a59df8ec6704",
            key: "b2015faded0a456d10aa8db1b4cbac68"
        },
        //Net_TV
        "Tmlja2Vsb2Rlb24=": {
            keyId: "61c18cefecc2d067beaa9ff181305345",
            key: "38d6f650cbf9a38fd9f35c01f98e647a"
        },
        // NICK
        "Tmlja19Kcg==": {
            keyId: "e824b2277a86fd6adfc40aa948e5064a",
            key: "28da2dbbe8e1a1463bbb23895b922083"
        },
        //Nick_Jr
        "Tk9USUNJQVNfUFlfQzQ=": {
            keyId: "8f66fe15735b2b1b3d5eb3646caa405e",
            key: "404b93fd7b499b1061c9a714e1cdb2d0"
        },
        //NOTICIAS_PY_C4
        "UGFyYWd1YXlfVFY=": {
            keyId: "68a5bd6c58e6c05bacfd18d3feec31f2",
            key: "ae23f8357512df2dfabcb8104b078182"
        },
        //Paraguay_TV
        "UGFyYW1vdW50": {
            keyId: "b85b710ecff3e38f31fc8e249b1c1cef",
            key: "a1544c193dde6f8858c9358ee69a60a7"
        },
        //Paramount
        "UEFSQVZJU0lPTl9DNA==": {
            keyId: "bd8e8c9b32ef027e8ff4ff0cfce855a4",
            key: "2918e9893b570c3fa1f215b52a12cc91"
        },
        //PARAVISION_C4
        "UEFLQV9QQUtB": {
            keyId: "334001b2f2644df9bdf35e92d2b89f8f",
            key: "475ec87d86ed0636dbb6d6d9d4a43bb7"
        },
        //PAKA_PAKA
        "UXVpZXJvX0hE": {
            keyId: "a354b0c82a3a720c4a6f52ed5a1190f4",
            key: "45a76dcc84f058cfabc8b958d7303b28"
        },
        //Quiero_HD
        "UkFJ": {
            keyId: "d214547d7d9a4011a39a899ce6e70071",
            key: "16c2ed0617cf1e123f3af6ea8875a82d"
        },
        //RAI
        "U05UX0M0": {
            keyId: "9f61dcce871cc41aeb206d05028fc30a",
            key: "9f6248194a3bf5e35b96b194e8624693"
        },
        //SNT_C4
        "U29ueUhE": {
            keyId: "fd9619f9d7c2d5115a339941279e0b4b",
            key: "bf55635e6591f905659fa27ab3ca2812"
        },
        // Sony Channel
        "U29ueV9Nb3ZpZXM=": {
            keyId: "88b9c41e72acd5b589bbfb4776969781",
            key: "43b9403f7a9e28fc2d7cbf10373b85aa"
        },
        // Sony Movie
        "U3BhY2U=": {
            keyId: "0942e4ecd1bd3567e8f9447f45c20a12",
            key: "efca6264f04cf7373de0c30ec79fe909"
        },
        //Space
        "Rk9YSEQ=": {
            keyId: "8023e85ef9d17561ee1b424179b1b15e",
            key: "477ad189f1fcd2baec026068107f862f"
        },
        //STAR-FOXHD
        "U3R1ZGlvX1VuaXZlcnNhbA==": {
            keyId: "d9b541e3cd064d569843da42788d4263",
            key: "bba5d26ad5051fb3f2cf7e3dd8a4a7d8"
        },
        //Studio_Universal
        "U3VuX0NoYW5uZWw=": {
            keyId: "158177692aa3463eae5f4e1f72403e9c",
            key: "1c6c026fba9cf7ecb576c7bedce0ead4"
        },
        //Sun_Channel
        "U3lGeQ==": {
            keyId: "9cd99cbb466c42e5b33e7a2ef7e2c7df",
            key: "18d9faccdaf2d15807d0a3f713e8b2a4"
        },
        //SyFy
        "VENN": {
            keyId: "a5f44a5e30714cf3bcee7c7f15a08b4e",
            key: "c3c141ae941ab9750339c3af45a65ce2"
        },
        // TCM
        "VGVsZXN1cg==": {
            keyId: "5235d8ee29f14ce6b26ea5d828aee77a",
            key: "6bf6bd339e3098babc2ab0b984cd2376"
        },
        //Telesur
        "VGVsZWZlSEQ=": {
            keyId: "3cec1b1ea9799dda5596e64f37e5ed20",
            key: "c69f3afde2085dcaaaddbf55246a0323"
        },
        //TelefeHD
        "Q05OX2VuX0VzcGFub2w=": {
            keyId: "0b20ed9da0e5457c9dfd3ae0b6092491",
            key: "98997a7020c18cb28174a2490147830a"
        },
        //CNN
        "VGVsZW11bmRvX0hE": {
            keyId: "53d752e4649dadd808d913985f86ee77",
            key: "d1fd24db1b61d634cabfc44538ce9b0e"
        },
        //Telemundo
        "UGFzaW9uZXM=": {
            keyId: "d41cf825e878f0d8e276218af7f5b7e1",
            key: "13d1b73ab578ab8623be9347bcf8972a"
        },
        //Pasiones
        "Q2FuYWxfOF9DQkE": {
            keyId: "103ce214b4d04c8eb4dd43670e956dad",
            key: "20e030576b8dc4df0d1c68e16af3bc0f"
        },
        //Canal_8_Cordoba-TELEFE
        "Q2FuYWxfOF9UdWN1bWFu": {
            keyId: "7760caa058b51b7cce151c0539fa4a8f",
            key: "edd086c1011ed2c54cbe869d0e8d9289"
        },
        //Canal_8_Tucuman-TELEFE
        "Q2FuYWxfNV9Sb3Nhcmlv": {
            keyId: "c61b5ac8e1664bf5b544e92ea2597e1c",
            key: "938437ac25f0a18e04efc1a083489edc"
        },
        //Canal_5_Rosario-TELEFE
        "VGVsZWZlX1NhbHRh": {
            keyId: "6c7a5de392f874308e4dd8f2837f1115",
            key: "9ccf9ec6922c403d67d0df7952547581"
        },
        //Telefe_Salta
        "VGVsZWZlX05ldXF1ZW4=": {
            keyId: "55828b728b8affe6d1d57d050025645d",
            key: "8ac11ed6d0ccaeac3f8218419f65bb94"
        },
        //Telefe_Neuquen
        "VEVMRUZVVFVST19DNA==": {
            keyId: "5d2731cf8a59b73438ef59d88cd882bf",
            key: "3f412fa6368b7db4903588de695377e1"
        },
        //TELEFUTURO_C4
        "VGVsZW1heA": {
            keyId: "e7ec364ad6854fedad797538cb58780d",
            key: "57dfb3fca2ca35b37ff81c35595e9be8"
        },
        //Telemax
        "VG9kb05vdGljaWFz": {
            keyId: "7ceb1cd0622cd7e88fcdc99fe3a55de6",
            key: "951637093d41c7388a1ef3f620cfea21"
        },
        //TodoNoticias-TN
        "VE5UX0hEX0FyZw": {
            keyId: "faad1722a575f4d9ec7b774db63c879c",
            key: "cf0184830344ba36ad2ffef9dd2dd9d0"
        },
        //TNT_HD_Arg
        "VEJT": {
            keyId: "49a0179b034ae899cb67d8a5834181aa",
            key: "486e2c6d69adea7e17f2960e8e366612"
        },
        // TNT Novelas (TBS)
        "VE5UU2VyaWVz": {
            keyId: "5c14d6aeb19bf113edf91a7b544253cb",
            key: "8d776d6f9c5c840ebe88d767dd731692"
        },
        // TNT Series
        "VHZfQ2hpbGU=": {
            keyId: "c5d0d76e24844235988f9265619e5fec",
            key: "446b71a6deb806c6f129e25de999d07c"
        },
        //Tv_Chile
        "VGV2ZV9DaXVkYWQ=": {
            keyId: "9b536cd1716647ee94c45fa4836d29d6",
            key: "d691c88a95440666742d1d8183182347"
        },
        //Teve_Ciudad
        "VFY1X01vbmRl": {
            keyId: "62034ff5988b4787b17cdf6f751a3142",
            key: "b3938f0af28b4c0c082b0d4210e389a0"
        },
        //TV5_Monde
        "VFZfRXNwYW5h": {
            keyId: "53e0a3741e2e4ff5843f165b53309088",
            key: "45095caabd9a359cd7ea3910d865d643"
        },
        //TV_Espana-TVE
        "VHJ1VFY=": {
            keyId: "7d0cecffe9c29734343cf9983978c1a1",
            key: "f86b5ac05f2a2626b6c61bd4e13344d8"
        },
        // TruTV
        "VW5pdmVyc2FsX0NoYW5uZWxfSEQ=": {
            keyId: "6cf9a13d6fd65a0f2e1cee3969aab9f5",
            key: "ea61c3c1adee71b5c2e9744e41d4b75f"
        },
        //Universal_Channel_HD
        "Vm9sdmVy": {
            keyId: "194e53184a424ce6989ad82c5f28fbc5",
            key: "65d60c5cc4de031172be0a6a51edbdfe"
        },
        //Volver
        "V2FybmVySEQ=": {
            keyId: "069bd3f0b6c279467e08549f17bf5bd0",
            key: "5afa7e369a6de1093818a85af912a775"
        },
        //WarnerHD
        "V09CSQ==": {
            keyId: "f2e44a719947ebfe37de527a9d6df71e",
            key: "029bddeb08909dd66a80276fc338d692"
        },
        //WOBI
        "UGxheWJveQ": {
            keyId: "8577d81eaf33436d9f1e482360685a7c",
            key: "f608a0ac703cfaaf9442574d9a2b87fb"
        },
        //Playboy
        "VmVudXM=": {
            keyId: "34237d2ae6684ee7a011f5b9c7c43e6d",
            key: "05d973d987915120e567880f50a422af"
        },
        //Venus
        "U2V4dHJlbWU": {
            keyId: "95bd64227acf458daf7886f803d0298e",
            key: "79e28ee0ec58958bb666f9e53a0cd434"
        },
        //Sextreme
        "SFRW": {
            keyId: "daecef5fe32f4ce083c6a0c692755d6a",
            key: "d4227f24389a9ba77293214b93eb0d7d"
        },
        // HTV
        "SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=": {
            keyId: "5299f96f873aa0f0e47edc4e15784717",
            key: "9d53176b0969492f2d93f1867be1dce1"
        },
        // IP Noticias
        "UlBDX0M0": {
            keyId: "a8093cdcb2d504bd38f16764bd21b6e5",
            key: "bfcf3b033b5f0b5ae020751a6746326f"
        },
        // el trece py
        "QWR1bHRfU3dpbQ==": {
            keyId: "9be1432e1e594c8d0648a44d3d9f0c46",
            key: "8e6c785b14d973c504074b1920f11b15"
        },
        // AS
        "Q2FuYWxfZGVfbGFfY2l1ZGFk": {
            keyId: "5ee7842b3cf24d1dba088365fa5d0543",
            key: "69cec006409823c06fbf2866a231b4f7"
        }// El Canal de la Ciudad
    };

    channelList[0].name = atob(getURL);
    channelList[0].getURL = getURL;
    channelList[0].number = getChannelNumber(getURL);
    channelList[0].keyId = channelMap[getURL].keyId;
    channelList[0].key = channelMap[getURL].key;

    // return channelMap[getURL] || { keyId: null, key: null };
    return channelList;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\[").replace(/[\]]/, "\]");
    var regex = new RegExp("[\?&]" + name + "=([^&#]*)")
      , results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// var getURL = getParameterByName('get');
// channelList = getChannelKeys(getURL);

async function getURLwithToken() {
    let token = sessionStorage.getItem('token')
    if (!token) {
        const url = 'https://chromecast.cvattv.com.ar/live/c7eds/La_Nacion/SA_Live_dash_enc/La_Nacion.m3u8';
        let response = await fetch(url, {
            signal: AbortSignal.timeout(5000)
        });
        if (response.redirected) {
            const regex = /(https:\/\/.+?)(?=\/live)/;
            const match = response.url.match(regex);
            if (match) {
                token = match[0]
                sessionStorage.setItem('token', match[0])
            }
        }
    }
    return token
}

// Dominios
let mt = ["chromecast", "cdn", "edge-live01-cte", "edge-live02-mun", "edge-mix02-cte", "edge-mix04-coe", "edge-mix05-coe", "edge2-ccast-sl",
//No funciona
// "edge1-ccast-sl",
// "edge-live01-mun",
// "edge-live11-hr",
// "edge-live12-hr",
// "edge-live13-hr",
// "edge-live14-hr",
// "edge-live15-hr",
// "edge-live16-hr",
// "edge-live17-hr",
// "edge-live31-hr",
// "edge-live32-hr",
// "edge-live34-hr",
// "edge-live11-sl",
// "edge-live12-sl",
// "edge-live13-sl",
// "edge-live15-sl",
// "edge-live17-sl",
// "edge-live31-sl",
// "edge-vod02-sl",
// "edge-vod04-sl",
// "edge-vod06-sl",
// "edge9-sl",
// "edge10-sl",
// "edge-live14-sl",
// "edge-vod01-hr",
// "edge-vod03-hr",
// "edge-vod04-hr",
// "edge6-ccast-sl",
// "edge-live01-cen",
// "edge-live03-cen",
// "edge-vod01-cen",
// "edge-live01-coe",
// "edge-mix01-coe",
// "edge-mix02-coe",
// "edge-mix03-coe",
// "edge-mix01-ird",
// "edge-mix02-ird",
// "edge-mix01-mus",
// "edge-mix03-mus",
]

// Comprueba dominios y lo asigna
let mt2 = [...mt];
async function getValidMpd(channelInfo) {
    const channelToLoad = channelInfo || channelList[0];
    currentChannel = channelToLoad;
    if (channelToLoad.type == 'external')
        return channelToLoad.getURL
    let getMPDTries = 0
    // while (mt2.length > 0) {
    while (getMPDTries < 5) {
        getMPDTries++
        let urlWithToken = await getURLwithToken()
        let url = `${urlWithToken}/live/c${channelToLoad.number || 3}eds/${atob(channelToLoad.getURL)}/SA_Live_dash_enc/${atob(channelToLoad.getURL)}.mpd`;

        async function readStream(streamMPD) {
            return streamMPD.read().then( ({value}) => {
                const decoder = new TextDecoder();
                const mpdProcessed = decoder.decode(value, {
                    stream: true
                });
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(mpdProcessed, 'application/xml');
                const adaptationSets = xmlDoc.getElementsByTagName('AdaptationSet');
                const repId = adaptationSets[1].getElementsByTagName('Representation')[0].getAttribute('id')
                const baseURL = adaptationSets[1].getElementsByTagName('SegmentTemplate')[0].getAttribute('initialization')
                const segmentUrl = baseURL.replace('$RepresentationID$', repId);
                return segmentUrl
            }
            ).catch(error => {
                console.error('Error reading mpd:', error);
            }
            );
        }

        try {
            let response = await fetch(url, {
                signal: AbortSignal.timeout(5000)
            });
            // Cancel at 5s if response timeout
            if (!response.ok || response.status !== 200)
                throw new Error('MPD token caido')
            const mpd_MP4 = await readStream(response.body.getReader())
            const mpd_MP4_url = `${response.url.slice(0, response.url.indexOf('SA_Live_dash_enc') + 17)}${mpd_MP4}`
            let MP4_response = await fetch(mpd_MP4_url)
            if (MP4_response.ok) {
                getMPDTries = 0
                audioChanged = false
                return url
            } else {
                console.log(`Link caido. Error: ${MP4_response.status}. Reintentando... (${getMPDTries})`);
                throw new Error('MPD Caido')
            }
        } catch (error) {
            console.log("Error fetching URL:", error);
        }

    }
    mt2 = [...mt]
    const errorMsg = document.querySelector('.homeScreen #appError');
    errorMsg && (errorMsg.style.display = 'block');
    const animLoader = document.querySelector('.homeScreen .loader');
    animLoader && (animLoader.style.display = 'none');
    throw new Error("No valid MPD URL found. Reloading list...");
}
