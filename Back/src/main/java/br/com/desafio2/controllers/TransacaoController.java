package br.com.desafio2.controllers;

import br.com.desafio2.entities.TransacaoEntity;
import br.com.desafio2.services.TransacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("transacao")
@CrossOrigin(origins = "http://localhost:4200")
public class TransacaoController {
    @Autowired
    private TransacaoService transacaoService;

    @GetMapping
    public List<TransacaoEntity> buscarTodasAsTransacoes(){
        return transacaoService.buscarTodasAsTransacoes();
    }

    @GetMapping("/porId/{id}")
    public Optional<TransacaoEntity> buscarTransacaoPorId(@PathVariable Integer id){
        return transacaoService.buscarTransacaoPorId(id);
    }

    @GetMapping("/porCategoria/{categoria}")
    public List<TransacaoEntity> buscarTransacaoPorCategoria(@PathVariable String categoria){
        return transacaoService.buscarTransacaoPorCategoria(categoria);
    }

    @GetMapping("/categorias")
    public List<String> obterCategorias(){
        return transacaoService.obterCategorias();
    }

    @GetMapping("/valor/{categoria}")
    public double obterValorTotalOuCategoria(@PathVariable String categoria){
        return transacaoService.retornarValorTotalOuCategoria(categoria);
    }

    @PostMapping
    public ResponseEntity<Integer> inserirTransacao(@RequestBody TransacaoEntity transacao){
        if(transacao.getId() == null){
            transacaoService.inserirOuAtualizarTransacao(transacao);
            return new ResponseEntity<>(transacao.getId(), HttpStatus.OK);
        } else{
            return new ResponseEntity<>(0, HttpStatus.FORBIDDEN);
        }
    }

    @PutMapping
    public ResponseEntity atualizarTransacao(@RequestBody TransacaoEntity transacao){
        if(transacao.getId() != null){
            transacaoService.inserirOuAtualizarTransacao(transacao);
            return ResponseEntity.status(200).build();
        } else{
            return new ResponseEntity<>(0, HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity apagarTransacao(@PathVariable Integer id){
        if(transacaoService.apagarTransacao(id)){
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(400).build();
        }
    }

    @DeleteMapping("/")
    public void apagarTodasAsTransacoes(){
        transacaoService.apagarTodasAsTransacoes();
    }


}
