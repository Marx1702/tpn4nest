// src/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Esto hace que el módulo esté disponible globalmente
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Exporta PrismaService para que otros módulos lo usen
})
export class PrismaModule {}
