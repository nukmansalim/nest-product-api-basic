import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { createProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }
    @Get()
    findAll() {
        return this.productService.findAll()
    }
    @Get(":id")

    findOne(@Param() id: string) {
        return this.productService.findOne(id)
    }
    @Post()
    @UseGuards(JwtAuthGuard)
    createProduct(@Body() body: createProductDto) {
        return this.productService.createProduct(body)

    }
    @Patch(":id")
    updateProduct(@Param() id: string, @Body() body: createProductDto) {
        return this.productService.updateProduct(id, body)
    }
    @Delete(":id")
    deleteProduct(@Param() id: string) {
        return this.productService.deleteProduct(id)
    }
}
