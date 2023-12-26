import express from 'express'
const router = express.Router();

/**
 *  -- Create Records --
 */

router.get('/utenti/insert/:username/:password', createController.putUtente);
router.get('/pubblicitari/aggiungi/:username/:password', createController.putPubblicitari);
router.get('/news/aggiungi/:argomento/:descrizione/:username', createController.putNews);
router.get('/lottatore/aggiungi/:nome/:cognome/:cf/:nascita/:peso/:team/:disciplina', createController.putLottatore);
router.get('/team/aggiungi/:TeamName/:CeoName/:Countrie', createController.putTeam);
router.get('/sponsor/aggiungi/:nome/:pagamento', createController.putSponsor);
router.get('/evento/aggiungi/:evento/:scontroI/:scontroII', createController.putEventoIIScontri);
router.get('/evento/aggiungi/:evento/:scontroI/:scontroII/:scontroIII', createController.putEventoIIIScontri);
router.get('/evento/aggiungi/:evento/:scontroI/:scontroII/:scontroIII/:scontroIV', createController.putEventoIVScontri);
router.get('/evento/aggiungi/:evento/:scontroI/:scontroII/:scontroIII/:scontroVI/:scontroV', createController.putEventoVScontri);

/**
 * -- Get Records
 */

router.get('/utenti', readController.getUtenti);
router.get('/utenti/getTipo/:username', readController.getUtenteTipo);
router.get('/news', readController.getNews);
router.get('/pubblicitari', readController.getPubblicitari);
router.get('/lottatore', readController.getLottatori);
router.get('/lottatore/complete', readController.getFiltedLottatori);
router.get('/record/:cf', readController.getRecord);
router.get('/categoria', readController.getCategorie);
router.get('/disciplina', readController.getDiscipline);
router.get('/team', readController.getTeams);
router.get('/sponsor', readController.getSponsor);
router.get('/eventi', readController.getEventi);
router.get('/eventi/:id', readController.getEventoSingolo);
router.get('/scontri/eventi/:id', readController.getScontriEvento);
router.get('/pesoPiuma', readController.getPesoPiuma);
router.get('/welterWeight', readController.getWelterWeight);
router.get('/pesoMedio', readController.getPesoMedio);
router.get('/pesiMassimi', readController.getPesiMassimi);

/**
 * -- Update Records --
 */

router.get('/lottatore/modifica/:tempLottatore/:tempRecord', updateController.updateLottatore);

/**
 * -- Delete Records --
 */

router.get('/pubblicitari/rimuovi/:username', deleteController.deletePubblicitari);
router.get('/news/rimuovi/:id', deleteController.deleteNews);
router.get('/lottatore/rimuovi/:cf', deleteController.deleteLottatore);
router.get('/team/rimuovi/:id', deleteController.deleteTeam);
router.get('/sponsor/rimuovi/:id', deleteController.deleteSponsor);

export = router;