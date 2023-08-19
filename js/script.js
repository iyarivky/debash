async function deobfuscate(input){
    try{
        let parts = input.split('\neval');
        console.log(parts)
        let result = {};
        let pairs = parts[0].split(';').filter(item => item !== "");
        console.log(pairs)
        for (let i = 0; i < pairs.length; i++) {
            let pair = pairs[i].split('=');
            let key = pair[0];
            //let value = pair[1].replace(/'/g, "").replace(/"/g, "");
            let value = pair[1].replace(/'/g, "")
            result[key] = value;
        }
        console.log(parts[1])
        let order = parts[1].replace(/"/g, '');
        console.log("ini order",order)
        let keys = order.split('$').filter(key => key !== "" && key !== " ");
        console.log("ini kunci",keys)
        console.log("ini result",result)
        let output = "";
        for (let i = 0; i < keys.length; i++) {
            output += result[keys[i]];
        }
        let removeQuote = output.split("\n")
        let cleanData = ""
        for (let i= 0; i < removeQuote.length; i++){
            cleanData += removeQuote[i].replace(/^"|"$|^'|'$/g, '')
            cleanData += "\n"
        }
        return cleanData
    }catch (error){
        console.error(error)
    }
}

let data = `z="
";LBz='SSOR';mDz='.hep';aBz='debu';TDz='ther';CCz='v4.i';Az='echo';PDz='net0';BBz='oduc';ZDz='rue';xEz=' "Un';gBz='s2 1';WDz='ovis';MDz='t.pp';CBz='t) "';mCz=',390';vEz='evic';aCz='rcfb';TBz='ing ';RCz='cp_m';iz='.mod';NBz='d) "';cDz='t.wl';IBz='-r) ';yBz=' 1.1';Hz='st 2';uDz='ble.';yCz='g 1';KDz='8';PBz=' "Pr';DBz=' " K';vBz='dns1';rz='uct.';pCz='cp_s';TEz='gea3';Bz=' ""';EDz='e.dn';eBz='.8.8';bz='EVIC';hDz='pa 5';kBz='h0.d';vz=') "';lDz='4';Zz='5';NCz='cn 0';Rz=' wai';Uz='how ';REz='e 1';ODz='t.rm';YDz='ng t';qz='prod';qBz='1.1';Vz='Your';ZBz='rop ';VCz='7000';Ez='e to';wz=' " M';gEz='olla';VBz='boos';sz='syst';cCz='cp_n';uz='rand';nz='(get';LDz='2 1.';DDz='t.lt';cEz='.dis';xDz='x 1';dz='$(ge';jEz='a53 ';Xz='ice ';Yz='p 0.';GEz='w1 2';kCz='mem ';XDz='ioni';fCz='s_sa';pz=' ro.';rEz='nt r';PEz='s.fe';tCz='s 1';lz='RAND';Lz=' "by';tBz='t.hs';Sz='t.."';Wz=' Dev';nCz='00,1';Qz='ease';nBz='8.8';fz='p ro';FBz='L:  ';BCz='t.ip';pBz='1.1.';hz='duct';gDz='.hsx';ez='tpro';WBz='t...';HCz='v4.r';hBz='.1.1';SCz='em 1';Gz=' boo';sDz='28';qDz='ateg';XEz='ix 2';UBz='Net ';fDz='.ril';xz='ODEL';OCz='cp_f';OEz='de 2';JCz='.flu';az=' " D';nEz='ling';iBz='.1';QEz='atur';wEz='e"';FDz='ea.d';PCz='ack ';RDz='1.11';Oz='"';hEz='pse ';iEz='a52 ';ADz='v6.i';pEz='ish"';dBz='s1 8';LEz='.def';HDz='pbr1';rBz='t.gp';aDz='t.wc';RBz=' ins';qEz=' "Do';fBz='.8';KEz='9';wDz='refi';Iz='.0"';EBz='ERNE';Nz='uyyy';tEz='t yo';SEz='sdr ';Cz=' "We';IEz='9905';Jz='slee';CFz='oot';sCz='tamp';cz='E:  ';BEz='w1.b';GBz='$(un';CDz='v6.t';NDz='p0.d';YBz='setp';eEz='.pow';HEz='6844';CEz='itma';YEz='3402';Mz=':dap';MEz='.agp';WCz=',187';XBz='p 2.';yz='buil';wBz=' 8.8';UEz='fd.p';GCz='sc 0';qCz='cp_t';yEz='inst';eCz='tric';QBz='oses';VDz='nopr';FEz='6729';jCz='37 1';iCz='cf13';MBz='boar';aEz='10,2';ACz='pa.d';vDz='3g.p';DEz='sk 4';XCz='000';hCz='cp_r';oBz='ns2 ';JDz='1 8.';oz='prop';uCz='cp_w';nDz=' 1';mEz='stal';jBz='t.et';wCz='w_sc';MCz='cp_e';VEz='lmn.';bDz='dma.';LCz='v4.t';NEz='s.mo';yDz='.htc';YCz='oder';pDz='pa.c';lCz='4096';uBz='dpa.';tDz='.ena';OBz='p 2';vCz='indo';SBz='tall';jz='el) ';KBz='ROCE';eDz='g.ro';HBz='ame ';oCz='0';kDz='ss 3';ABz='d.pr';JEz='.hsu';ZCz='ate_';BDz='v6.r';jDz='scla';uEz='ur d';dCz='o_me';mz=':  $';UDz='ing.';sEz='eboo';rDz='ory ';QCz='1';ZEz=',234';AEz='mask';lBz='ns1 ';tz='em.b';Dz='lcom';fEz='er.c';lEz=' "In';bEz='3411';Pz=' "Pl';cBz='t.dn';KCz='sh 1';EEz='2949';dDz='an0.';kEz='dtm ';rCz='imes';xCz='alin';Kz='p 1';mBz='8.8.';ICz='oute';TCz='8700';UCz='0,18';Tz=' " S';FCz='u_di';GDz='t.pd';ECz='_pmt';DCz='p_no';bCz='uf 1';oDz='.hsd';oEz=' fin';sBz='rs.d';gCz='ve 1';IDz='.dns';gz='.pro';WEz='pref';iDz='.gpr';JBz=' " P';BFz=' Reb';Fz=' Net';xBz='dns2';QDz='net1';SDz='t.te';kz=' " B';dEz='able';AFz='all:';bBz='g.ne';
eval "$Az$Bz$z$Az$Cz$Dz$Ez$Fz$Gz$Hz$Iz$z$Jz$Kz$z$Az$Bz$z$Az$Bz$z$Az$Lz$Mz$Nz$Oz$z$Az$Bz$z$Jz$Kz$z$Az$Pz$Qz$Rz$Sz$z$Jz$Kz$z$Az$Bz$z$Az$Tz$Uz$Vz$Wz$Xz$Oz$z$Az$Bz$z$Jz$Yz$Zz$z$Az$az$bz$cz$dz$ez$fz$gz$hz$iz$jz$Oz$z$Jz$Yz$Zz$z$Az$kz$lz$mz$nz$oz$pz$qz$rz$sz$tz$uz$vz$z$Jz$Yz$Zz$z$Az$wz$xz$mz$nz$oz$pz$yz$ABz$BBz$CBz$z$Jz$Yz$Zz$z$Az$DBz$EBz$FBz$GBz$HBz$IBz$Oz$z$Jz$Yz$Zz$z$Az$JBz$KBz$LBz$mz$nz$oz$pz$qz$rz$MBz$NBz$z$Jz$OBz$z$Az$Bz$z$Az$Bz$z$Az$PBz$QBz$RBz$SBz$TBz$UBz$VBz$WBz$Oz$z$Az$Bz$z$Az$Bz$z$Jz$XBz$Zz$z$YBz$ZBz$aBz$bBz$cBz$dBz$eBz$fBz$z$YBz$ZBz$aBz$bBz$cBz$gBz$hBz$iBz$z$YBz$ZBz$aBz$bBz$jBz$kBz$lBz$mBz$nBz$z$YBz$ZBz$aBz$bBz$jBz$kBz$oBz$pBz$qBz$z$YBz$ZBz$aBz$bBz$rBz$sBz$lBz$mBz$nBz$z$YBz$ZBz$aBz$bBz$rBz$sBz$oBz$pBz$qBz$z$YBz$ZBz$aBz$bBz$tBz$uBz$vBz$wBz$eBz$z$YBz$ZBz$aBz$bBz$tBz$uBz$xBz$yBz$hBz$z$YBz$ZBz$aBz$bBz$tBz$ACz$lBz$mBz$nBz$z$YBz$ZBz$aBz$bBz$tBz$ACz$oBz$pBz$qBz$z$YBz$ZBz$aBz$bBz$BCz$CCz$DCz$ECz$FCz$GCz$z$YBz$ZBz$aBz$bBz$BCz$HCz$ICz$JCz$KCz$z$YBz$ZBz$aBz$bBz$BCz$LCz$MCz$NCz$z$YBz$ZBz$aBz$bBz$BCz$LCz$OCz$PCz$QCz$z$YBz$ZBz$aBz$bBz$BCz$LCz$RCz$SCz$TCz$UCz$VCz$WCz$XCz$z$YBz$ZBz$aBz$bBz$BCz$LCz$RCz$YCz$ZCz$aCz$bCz$z$YBz$ZBz$aBz$bBz$BCz$LCz$cCz$dCz$eCz$fCz$gCz$z$YBz$ZBz$aBz$bBz$BCz$LCz$hCz$iCz$jCz$z$YBz$ZBz$aBz$bBz$BCz$LCz$hCz$kCz$lCz$mCz$nCz$TCz$oCz$z$YBz$ZBz$aBz$bBz$BCz$LCz$pCz$PCz$QCz$z$YBz$ZBz$aBz$bBz$BCz$LCz$qCz$rCz$sCz$tCz$z$YBz$ZBz$aBz$bBz$BCz$LCz$uCz$vCz$wCz$xCz$yCz$z$YBz$ZBz$aBz$bBz$BCz$LCz$uCz$kCz$lCz$mCz$nCz$TCz$z$YBz$ZBz$aBz$bBz$BCz$ADz$DCz$ECz$FCz$GCz$z$YBz$ZBz$aBz$bBz$BCz$BDz$ICz$JCz$KCz$z$YBz$ZBz$aBz$bBz$BCz$CDz$MCz$NCz$z$YBz$ZBz$aBz$bBz$BCz$CDz$OCz$PCz$QCz$z$YBz$ZBz$aBz$bBz$BCz$CDz$RCz$SCz$TCz$UCz$VCz$WCz$XCz$z$YBz$ZBz$aBz$bBz$BCz$CDz$RCz$YCz$ZCz$aCz$bCz$z$YBz$ZBz$aBz$bBz$BCz$LCz$cCz$dCz$eCz$fCz$gCz$z$YBz$ZBz$aBz$bBz$BCz$LCz$hCz$iCz$jCz$z$YBz$ZBz$aBz$bBz$BCz$LCz$hCz$kCz$lCz$mCz$nCz$TCz$oCz$z$YBz$ZBz$aBz$bBz$BCz$CDz$pCz$PCz$QCz$z$YBz$ZBz$aBz$bBz$BCz$CDz$qCz$rCz$sCz$tCz$z$YBz$ZBz$aBz$bBz$BCz$CDz$uCz$vCz$wCz$xCz$yCz$z$YBz$ZBz$aBz$bBz$BCz$CDz$uCz$kCz$lCz$mCz$nCz$TCz$z$YBz$ZBz$aBz$bBz$DDz$EDz$dBz$eBz$fBz$z$YBz$ZBz$aBz$bBz$DDz$EDz$gBz$hBz$iBz$z$YBz$ZBz$aBz$bBz$DDz$FDz$lBz$mBz$nBz$z$YBz$ZBz$aBz$bBz$DDz$FDz$oBz$pBz$qBz$z$YBz$ZBz$aBz$bBz$GDz$HDz$IDz$JDz$mBz$KDz$z$YBz$ZBz$aBz$bBz$GDz$HDz$IDz$LDz$pBz$QCz$z$YBz$ZBz$aBz$bBz$MDz$NDz$lBz$mBz$nBz$z$YBz$ZBz$aBz$bBz$MDz$NDz$oBz$pBz$qBz$z$YBz$ZBz$aBz$bBz$ODz$PDz$IDz$JDz$mBz$KDz$z$YBz$ZBz$aBz$bBz$ODz$PDz$IDz$LDz$pBz$QCz$z$YBz$ZBz$aBz$bBz$ODz$QDz$IDz$JDz$mBz$KDz$z$YBz$ZBz$aBz$bBz$ODz$QDz$IDz$LDz$RDz$z$YBz$ZBz$aBz$bBz$SDz$TDz$UDz$VDz$WDz$XDz$YDz$ZDz$z$YBz$ZBz$aBz$bBz$aDz$bDz$vBz$wBz$eBz$z$YBz$ZBz$aBz$bBz$aDz$bDz$xBz$yBz$hBz$z$YBz$ZBz$aBz$bBz$cDz$dDz$vBz$wBz$eBz$z$YBz$ZBz$aBz$bBz$cDz$dDz$xBz$yBz$hBz$z$YBz$ZBz$aBz$eDz$fDz$gDz$hDz$z$YBz$ZBz$aBz$eDz$fDz$iDz$jDz$kDz$lDz$z$YBz$ZBz$aBz$eDz$fDz$mDz$nDz$z$YBz$ZBz$aBz$eDz$fDz$oDz$pDz$qDz$rDz$sDz$z$YBz$ZBz$aBz$eDz$fDz$tDz$uDz$vDz$wDz$xDz$z$YBz$ZBz$aBz$eDz$fDz$yDz$AEz$BEz$CEz$DEz$EEz$FEz$Zz$z$YBz$ZBz$aBz$eDz$fDz$yDz$AEz$GEz$HEz$IEz$z$YBz$ZBz$aBz$eDz$fDz$JEz$pDz$qDz$rDz$KEz$z$YBz$ZBz$aBz$eDz$fDz$LEz$MEz$NEz$OEz$z$YBz$ZBz$aBz$eDz$fDz$LEz$MEz$PEz$QEz$REz$z$YBz$ZBz$aBz$eDz$fDz$tDz$uDz$SEz$QCz$z$YBz$ZBz$aBz$eDz$fDz$tDz$uDz$TEz$nDz$z$YBz$ZBz$aBz$eDz$fDz$tDz$uDz$UEz$VEz$WEz$XEz$YEz$ZEz$aEz$bEz$z$YBz$ZBz$aBz$eDz$fDz$cEz$dEz$eEz$fEz$gEz$hEz$QCz$z$YBz$ZBz$aBz$eDz$fDz$tDz$uDz$iEz$QCz$z$YBz$ZBz$aBz$eDz$fDz$tDz$uDz$jEz$QCz$z$YBz$ZBz$aBz$eDz$fDz$tDz$uDz$kEz$QCz$z$Jz$OBz$z$Az$lEz$mEz$nEz$oEz$pEz$z$Jz$Yz$Zz$z$Az$qEz$rEz$sEz$tEz$uEz$vEz$wEz$z$Az$xEz$yEz$AFz$BFz$CFz$z$Az$Bz$z$Jz$Yz$Zz"`

console.log(await deobfuscate(data))
